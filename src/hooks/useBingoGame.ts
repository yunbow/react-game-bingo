import { useState, useCallback } from 'react';
import { GameState, BingoCard, BingoCell } from '../types';
import { BINGO_CONFIG } from '../Config';

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isNumberInColumn = (number: number, card: BingoCard, columnIndex: number): boolean => {
  return card.some(row => row[columnIndex].value === number);
};

const generateBingoCard = (): BingoCard => {
  const card: BingoCard = [];

  for (let row = 0; row < BINGO_CONFIG.GRID_SIZE; row++) {
    const newRow: BingoCell[] = [];

    for (let col = 0; col < BINGO_CONFIG.GRID_SIZE; col++) {
      let value: number | 'FREE';

      if (row === BINGO_CONFIG.FREE_CELL_POSITION.row && col === BINGO_CONFIG.FREE_CELL_POSITION.col) {
        value = 'FREE';
      } else {
        do {
          value = getRandomNumber(BINGO_CONFIG.RANGES[col].min, BINGO_CONFIG.RANGES[col].max);
        } while (isNumberInColumn(value, card, col));
      }

      newRow.push({
        value,
        isMarked: value === 'FREE',
        row,
        col
      });
    }

    card.push(newRow);
  }

  return card;
};

const checkBingo = (card: BingoCard): boolean => {
  // 横列チェック
  for (let row = 0; row < BINGO_CONFIG.GRID_SIZE; row++) {
    if (card[row].every(cell => cell.isMarked)) {
      return true;
    }
  }

  // 縦列チェック
  for (let col = 0; col < BINGO_CONFIG.GRID_SIZE; col++) {
    if (card.every(row => row[col].isMarked)) {
      return true;
    }
  }

  // 斜め（左上から右下）チェック
  if (card.every((row, index) => row[index].isMarked)) {
    return true;
  }

  // 斜め（右上から左下）チェック
  if (card.every((row, index) => row[BINGO_CONFIG.GRID_SIZE - 1 - index].isMarked)) {
    return true;
  }

  return false;
};

export const useBingoGame = () => {
  const [gameState, setGameState] = useState<GameState>(() => ({
    bingoCard: generateBingoCard(),
    drawnNumbers: [],
    markedCells: [{ row: BINGO_CONFIG.FREE_CELL_POSITION.row, col: BINGO_CONFIG.FREE_CELL_POSITION.col }],
    bingoAchieved: false,
    currentNumber: null
  }));

  const generateCard = useCallback(() => {
    const newCard = generateBingoCard();
    setGameState({
      bingoCard: newCard,
      drawnNumbers: [],
      markedCells: [{ row: BINGO_CONFIG.FREE_CELL_POSITION.row, col: BINGO_CONFIG.FREE_CELL_POSITION.col }],
      bingoAchieved: false,
      currentNumber: null
    });
  }, []);

  const drawNumber = useCallback(() => {
    if (gameState.drawnNumbers.length >= BINGO_CONFIG.TOTAL_NUMBERS || gameState.bingoAchieved) {
      return;
    }

    let number: number;
    do {
      number = getRandomNumber(1, BINGO_CONFIG.TOTAL_NUMBERS);
    } while (gameState.drawnNumbers.includes(number));

    const newDrawnNumbers = [...gameState.drawnNumbers, number];
    const updatedCard = gameState.bingoCard.map(row =>
      row.map(cell => ({
        ...cell,
        isMarked: cell.isMarked || cell.value === number
      }))
    );

    const bingoAchieved = checkBingo(updatedCard);

    setGameState(prev => ({
      ...prev,
      bingoCard: updatedCard,
      drawnNumbers: newDrawnNumbers,
      currentNumber: number,
      bingoAchieved
    }));
  }, [gameState.drawnNumbers, gameState.bingoCard, gameState.bingoAchieved]);

  const toggleCell = useCallback((row: number, col: number) => {
    if (gameState.bingoAchieved) return;

    const cell = gameState.bingoCard[row][col];
    if (cell.value === 'FREE') return;
    if (!gameState.drawnNumbers.includes(cell.value as number)) return;

    const updatedCard = gameState.bingoCard.map((cardRow, rowIndex) =>
      cardRow.map((cardCell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return { ...cardCell, isMarked: !cardCell.isMarked };
        }
        return cardCell;
      })
    );

    const bingoAchieved = checkBingo(updatedCard);

    setGameState(prev => ({
      ...prev,
      bingoCard: updatedCard,
      bingoAchieved
    }));
  }, [gameState.bingoCard, gameState.drawnNumbers, gameState.bingoAchieved]);

  const resetGame = useCallback(() => {
    const newCard = generateBingoCard();
    setGameState({
      bingoCard: newCard,
      drawnNumbers: [],
      markedCells: [{ row: BINGO_CONFIG.FREE_CELL_POSITION.row, col: BINGO_CONFIG.FREE_CELL_POSITION.col }],
      bingoAchieved: false,
      currentNumber: null
    });
  }, []);

  return {
    gameState,
    generateCard,
    drawNumber,
    toggleCell,
    resetGame
  };
};