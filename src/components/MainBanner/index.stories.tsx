import { MainBanner } from '.';
import '../../styles/color-styles.css';
import '../../styles/normalize.css';

export default {
  title: 'Components/MainBanner',
  component: MainBanner,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export function Desktop() {
  return (
    <MainBanner />
  );
}
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
}
