import React from 'react';
import { DrawnNumberProps } from '../../types';
import styles from './DrawnNumber.module.css';

export const DrawnNumber: React.FC<DrawnNumberProps> = ({ number }) => {
  return (
    <div className={styles.drawnNumber}>
      {number}
    </div>
  );
};