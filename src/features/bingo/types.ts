export interface BingoCell {
  value: number | 'FREE';
  isMarked: boolean;
  row: number;
  col: number;
}

export type BingoCard = BingoCell[][];

export interface BingoRange {
  min: number;
  max: number;
}

export interface GameState {
  bingoCard: BingoCard;
  drawnNumbers: number[];
  markedCells: { row: number; col: number }[];
  bingoAchieved: boolean;
  currentNumber: number | null;
}

export interface CellProps {
  value: number | 'FREE';
  isMarked: boolean;
  isFree: boolean;
  onClick: () => void;
}

export interface DrawnNumberProps {
  number: number;
}

export interface BingoCardProps {
  card: BingoCard;
  onCellClick: (row: number, col: number) => void;
}

export interface ControlButtonsProps {
  onGenerateCard: () => void;
  onDrawNumber: () => void;
  onResetGame: () => void;
  isDrawDisabled: boolean;
}

export interface GameInfoProps {
  drawnNumbers: number[];
  currentNumber: number | null;
  bingoStatus: string;
  isWin: boolean;
}
