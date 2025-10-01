import type { Meta, StoryObj } from '@storybook/react';

import { BingoGame } from '../features/bingo/BingoGame';

const meta = {
  title: 'Bingo/BingoGame',
  component: BingoGame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BingoGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};