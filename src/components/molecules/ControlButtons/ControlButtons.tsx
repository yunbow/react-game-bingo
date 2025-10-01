import React from 'react';
import { Button } from '../../atoms';
import styles from './ControlButtons.module.css';

interface ControlButtonsProps {
  onGenerateCard: () => void;
  onDrawNumber: () => void;
  onResetGame: () => void;
  isDrawDisabled: boolean;
}

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