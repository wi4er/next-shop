import { Menu } from './Menu';
import { Logo } from './Logo';
import css from './index.module.css';

export function FooterBar() {
  return (
    <footer className={css.index}>

      <div className={css.body}>
        <Logo />

        <div className={css.menu_list}>
          <Menu
            title="Discovery"
            list={[ {
              name: 'New season',
              link: '/',
            }, {
              name: 'Most searched',
              link: '/',
            }, {
              name: 'Most selled',
              link: '/',
            } ]}
          />
          <Menu
            title="About"
            list={[ {
              name: 'Help',
              link: '/',
            }, {
              name: 'Shipping',
              link: '/',
            }, {
              name: 'Affiliate',
              link: '/',
            } ]}
          />
          <Menu
            title="Info"
            list={[ {
              name: 'Contact us',
              link: '/',
            }, {
              name: 'Privacy Policies',
              link: '/',
            }, {
              name: 'Terms & Conditions',
              link: '/',
            } ]}
          />
        </div>
      </div>
    </footer>
  );
}