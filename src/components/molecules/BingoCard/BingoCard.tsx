import React from 'react';
import { Cell } from '../../atoms';
import { BingoCard as BingoCardType } from '../../../types';
import { BINGO_CONFIG } from '../../../Config';
import styles from './BingoCard.module.css';

interface BingoCardProps {
  card: BingoCardType;
  onCellClick: (row: number, col: number) => void;
}

export const BingoCard: React.FC<BingoCardProps> = ({ card, onCellClick }) => {
  return (
    <div className={styles.bingoCard}>
      <div className={styles.cardHeader}>
        {BINGO_CONFIG.HEADERS.map((header, index) => (
          <div key={index} className={styles.headerCell}>
            {header}
          </div>
        ))}
      </div>
      <div className={styles.cardGrid}>
        {card.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell.value}
              isMarked={cell.isMarked}
              isFree={cell.value === 'FREE'}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};