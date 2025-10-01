import React from 'react';
import { DrawnNumber } from '../DrawnNumber';
import { GameInfoProps } from '../../types';
import styles from './GameInfo.module.css';

export const GameInfo: React.FC<GameInfoProps> = ({
  drawnNumbers,
  currentNumber,
  bingoStatus,
  isWin
}) => {
  return (
    <div className={styles.gameInfo}>
      <div className={styles.drawnNumbers}>
        <h2>引かれた数字</h2>
        <div className={styles.numbersList}>
          {drawnNumbers.map((number) => (
            <DrawnNumber key={number} number={number} />
          ))}
        </div>
      </div>

      <div className={styles.currentNumber}>
        <h2>現在の数字</h2>
        <div className={styles.numberDisplay}>
          {currentNumber ?? '-'}
        </div>
      </div>

      <div className={styles.bingoStatus}>
        <h2>ステータス</h2>
        <div className={`${styles.status} ${isWin ? styles.win : ''}`}>
          {bingoStatus}
        </div>
      </div>
    </div>
  );
};