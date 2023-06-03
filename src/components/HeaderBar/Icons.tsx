import ProfileSvg from './svg/Profile.svg';
import CartSvg from './svg/Cart.svg';
import css from './Icons.module.css';

export function Icons() {
  return (
    <div className={css.index}>
      <ProfileSvg/>

      <CartSvg/>
    </div>
  );
}