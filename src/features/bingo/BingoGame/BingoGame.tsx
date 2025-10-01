import React from 'react';
import { BingoCard } from '../components/BingoCard';
import { ControlButtons } from '../components/ControlButtons';
import { GameInfo } from '../components/GameInfo';
import { useBingoGame } from '../useBingoGame';
import styles from './BingoGame.module.css';

export const BingoGame: React.FC = () => {
  const { gameState, generateCard, drawNumber, toggleCell, resetGame } = useBingoGame();

  const getStatusMessage = (): string => {
    if (gameState.bingoAchieved) {
      return 'ビンゴ！おめでとうございます！';
    }
    if (gameState.drawnNumbers.length === 0) {
      return 'ゲームを開始してください';
    }
    if (gameState.drawnNumbers.length >= 75) {
      return 'すべての数字が引かれました！';
    }
    return 'ゲーム中';
  };

  return (
    <div className={styles.container}>
      <h1>ビンゴゲーム</h1>

      <ControlButtons
        onGenerateCard={generateCard}
        onDrawNumber={drawNumber}
        onResetGame={resetGame}
        isDrawDisabled={gameState.bingoAchieved || gameState.drawnNumbers.length >= 75}
      />

      <div className={styles.gameArea}>
        <BingoCard
          card={gameState.bingoCard}
          onCellClick={toggleCell}
        />

        <GameInfo
          drawnNumbers={gameState.drawnNumbers}
          currentNumber={gameState.currentNumber}
          bingoStatus={getStatusMessage()}
          isWin={gameState.bingoAchieved}
        />
      </div>
    </div>
  );
};