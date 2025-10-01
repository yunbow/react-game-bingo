import React from 'react';
import { Button } from '../../../../components/Button';
import { ControlButtonsProps } from '../../types';
import styles from './ControlButtons.module.css';

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  onGenerateCard,
  onDrawNumber,
  onResetGame,
  isDrawDisabled
}) => {
  return (
    <div className={styles.controls}>
      <Button onClick={onGenerateCard}>
        新しいカードを作成
      </Button>
      <Button onClick={onDrawNumber} disabled={isDrawDisabled}>
        数字を引く
      </Button>
      <Button onClick={onResetGame} variant="danger">
        ゲームをリセット
      </Button>
    </div>
  );
};