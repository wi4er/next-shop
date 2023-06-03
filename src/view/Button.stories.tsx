import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize } from './Button';
import '../styles/color-styles.css';

const meta: Meta<typeof Button> = {
  title: 'View/Button',
  component: Button,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Big = () => {
  return (
    <div style={{
      display: 'flex',
      gap: 20,
    }}>
      <Button
        size={ButtonSize.BIG}
        onClick={() => console.log('CLICK')}
      >
        Text
      </Button>

      <Button
        size={ButtonSize.BIG}
        onClick={() => console.log('CLICK')}
        disabled
      >
        Text
      </Button>
    </div>
  );
};

export const Small = () => {
  return (
    <div style={{
      display: 'flex',
      gap: 20,
    }}>
      <Button
        size={ButtonSize.SMALL}
        onClick={() => console.log('CLICK')}
      >
        Text
      </Button>

      <Button
        size={ButtonSize.SMALL}
        onClick={() => console.log('CLICK')}
        disabled
      >
        Text
      </Button>
    </div>
  );
};