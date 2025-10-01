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

export type FilterType = 'all' | 'active' | 'completed';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
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