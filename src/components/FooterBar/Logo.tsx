import css from './Logo.module.css';
import font from '../../styles/fonts.module.css';
import LogoSvg from './svg/footer.svg';
import cn from 'classnames';

export function Logo() {
  return (
    <div>
      <LogoSvg />

      <div className={cn(css.description, font.regular_16)}>
        Your natural candle made for your home and for your wellness.
      </div>
    </div>
  );
}