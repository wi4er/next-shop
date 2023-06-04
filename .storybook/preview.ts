import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        iphone_8: { name: 'iphone8', styles: { width: '375px', height: '667px' } },
        ipad_mini: { name: 'iPad mini', styles: { width: '744px', height: '1133px' } },
        desktop: { name: 'Desktop screen', styles: { width: '1280px', height: '800ox' } },
      },
    },
  },
};

export default preview;
