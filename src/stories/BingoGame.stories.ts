import type { Meta, StoryObj } from '@storybook/react';

import { BingoGame } from '../components/organisms';

const meta = {
  title: 'Organisms/BingoGame',
  component: BingoGame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BingoGame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};