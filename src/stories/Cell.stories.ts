import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Cell } from '../features/bingo/components/Cell';

const meta = {
  title: 'Bingo/Components/Cell',
  component: Cell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: action('clicked') },
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 42,
    isMarked: false,
    isFree: false,
  },
};

export const Marked: Story = {
  args: {
    value: 42,
    isMarked: true,
    isFree: false,
  },
};

export const Free: Story = {
  args: {
    value: 'FREE',
    isMarked: true,
    isFree: true,
  },
};