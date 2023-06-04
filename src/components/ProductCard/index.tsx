import css from './index.module.css';
import font from '../../styles/fonts.module.css';
import cn from 'classnames';
import { Product } from '@/model/Product';

interface ProductCardProps {
  card: Product;
}

export function ProductCard(props: ProductCardProps) {
  const { card } = props;

  return (
    <div className={css.index}>
      <div className={css.image}>
        <img
          src={card.image}
        />
      </div>

      <div className={css.info}>
        <div className={cn(css.name, font.medium_16)}>
          Product name
        </div>

        <div className={cn(css.price, font.medium_20)}>
          9.99$
        </div>
      </div>
    </div>
  );
}