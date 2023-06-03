import { HeaderBar } from './index';
import '../../styles/color-styles.css';
import '../../styles/normalize.css';
import '@fontsource/poppins';

export default {
  title: 'Components/HeaderBar',
  component: HeaderBar,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export function Desktop() {
  return (
    <HeaderBar />
  );
}
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
}

export function Mobile375() {
  return (
    <HeaderBar />
  );
}
Mobile375.parameters = {
  viewport: {
    defaultViewport: 'iphone_8',
  },
}