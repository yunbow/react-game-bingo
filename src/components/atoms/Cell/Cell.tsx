import React from 'react';
import { CellProps } from '../../../types';
import styles from './Cell.module.css';

export const Cell: React.FC<CellProps> = ({
  value,
  isMarked,
  isFree,
  onClick
}) => {
  const className = [
    styles.cell,
    isMarked ? styles.marked : '',
    isFree ? styles.free : ''
  ].filter(Boolean).join(' ');

  return (
    <div
      className={className}
      onClick={onClick}
    >
      {value}
    </div>
  );
};