import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { BingoCard } from '../features/bingo/components/BingoCard';
import { BingoCard as BingoCardType } from '../features/bingo/types';

const sampleCard: BingoCardType = [
  [
    { value: 1, isMarked: false, row: 0, col: 0 },
    { value: 16, isMarked: false, row: 0, col: 1 },
    { value: 31, isMarked: false, row: 0, col: 2 },
    { value: 46, isMarked: false, row: 0, col: 3 },
    { value: 61, isMarked: false, row: 0, col: 4 },
  ],
  [
    { value: 2, isMarked: false, row: 1, col: 0 },
    { value: 17, isMarked: false, row: 1, col: 1 },
    { value: 32, isMarked: false, row: 1, col: 2 },
    { value: 47, isMarked: false, row: 1, col: 3 },
    { value: 62, isMarked: false, row: 1, col: 4 },
  ],
  [
    { value: 3, isMarked: false, row: 2, col: 0 },
    { value: 18, isMarked: false, row: 2, col: 1 },
    { value: 'FREE', isMarked: true, row: 2, col: 2 },
    { value: 48, isMarked: false, row: 2, col: 3 },
    { value: 63, isMarked: false, row: 2, col: 4 },
  ],
  [
    { value: 4, isMarked: false, row: 3, col: 0 },
    { value: 19, isMarked: false, row: 3, col: 1 },
    { value: 33, isMarked: false, row: 3, col: 2 },
    { value: 49, isMarked: false, row: 3, col: 3 },
    { value: 64, isMarked: false, row: 3, col: 4 },
  ],
  [
    { value: 5, isMarked: false, row: 4, col: 0 },
    { value: 20, isMarked: false, row: 4, col: 1 },
    { value: 34, isMarked: false, row: 4, col: 2 },
    { value: 50, isMarked: false, row: 4, col: 3 },
    { value: 65, isMarked: false, row: 4, col: 4 },
  ],
];

const markedCard: BingoCardType = sampleCard.map(row =>
  row.map(cell => ({ ...cell, isMarked: true }))
);

const meta = {
  title: 'Bingo/Components/BingoCard',
  component: BingoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onCellClick: action('cell-clicked') },
} satisfies Meta<typeof BingoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    card: sampleCard,
  },
};

export const AllMarked: Story = {
  args: {
    card: markedCard,
  },
};