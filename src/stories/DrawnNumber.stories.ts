import type { Meta, StoryObj } from '@storybook/react';

import { DrawnNumber } from '../components/atoms';

const meta = {
  title: 'Atoms/DrawnNumber',
  component: DrawnNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DrawnNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 42,
  },
};

export const SingleDigit: Story = {
  args: {
    number: 7,
  },
};

export const DoubleDigit: Story = {
  args: {
    number: 75,
  },
};