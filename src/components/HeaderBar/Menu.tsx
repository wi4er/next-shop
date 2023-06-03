import css from './Menu.module.css';
import font from '../../styles/fonts.module.css';
import ArrowSvg from './svg/ChevronDown.svg';
import cn from 'classnames';

export function Menu() {
  return (
    <div className={css.index}>
      <div className={cn(font.medium_16, css.discover)}>
        Discovery

        <ArrowSvg />
      </div>

      <div className={font.medium_16}>
        About
      </div>

      <div className={font.medium_16}>
        Contact us
      </div>
    </div>
  );
}