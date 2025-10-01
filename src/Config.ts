import { BingoRange } from './types';

export const BINGO_CONFIG = {
  GRID_SIZE: 5,
  FREE_CELL_POSITION: { row: 2, col: 2 },
  TOTAL_NUMBERS: 75,
  RANGES: [
    { min: 1, max: 15 },   // B: 1-15
    { min: 16, max: 30 },  // I: 16-30
    { min: 31, max: 45 },  // N: 31-45
    { min: 46, max: 60 },  // G: 46-60
    { min: 61, max: 75 }   // O: 61-75
  ] as BingoRange[],
  HEADERS: ['B', 'I', 'N', 'G', 'O']
} as const;