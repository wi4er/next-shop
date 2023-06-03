import { FooterBar } from './index';
import '../../styles/color-styles.css';
import '../../styles/normalize.css';
import { Menu } from './Menu';

export default {
  title: 'Components/FooterBar',
  component: FooterBar,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export function Desktop1440() {
  return (
    <div style={{
      backgroundColor: '#272727'
    }}>
      <FooterBar />
    </div>
  );
}

export function Mobile375() {
  return (
    <div style={{
      backgroundColor: '#272727'
    }}>
      <FooterBar />
    </div>
  );
}
Mobile375.parameters = {
  viewport: {
    defaultViewport: 'iphone_8',
  },
}

export function Mobile744() {
  return (
    <div style={{
      backgroundColor: '#272727'
    }}>
      <FooterBar />
    </div>
  );
}
Mobile744.parameters = {
  viewport: {
    defaultViewport: 'ipad_mini',
  },
}

export function MenuAppear() {
  return (
    <div style={{
      backgroundColor: '#272727'
    }}>
      <Menu
        title="Discovery"
        list={[{
          name: 'New season',
          link: '/',
        }, {
          name: 'Most searched',
          link: '/',
        }, {
          name: 'Most selled',
          link: '/',
        }]}
      />
    </div>
  );
}