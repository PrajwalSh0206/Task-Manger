import type { Meta, StoryObj } from '@storybook/react';
import PopupCard from '../components/PopupCard/PopupCard';

const meta = {
  title: 'Example/PopupCard',
  component: PopupCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'string',
    description: '',
    date: '',
    completedTag: false,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof PopupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
