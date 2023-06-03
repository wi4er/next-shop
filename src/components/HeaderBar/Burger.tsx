import css from './Burger.module.css';
import BurgerSvg from './svg/hamburger-menu.svg';

export function Burger() {
  return (
    <div className={css.index}>
      <BurgerSvg />
    </div>
  );
}