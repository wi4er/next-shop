import css from './index.module.css';
import font from '../../styles/fonts.module.css';
import { Product } from '../../model/Product';
import { ProductCard } from '../ProductCard';
import cn from 'classnames';

interface ProductListProps {
  list: Product[];
  title: string;
  subtitle: string;
}

export function ProductList(props: ProductListProps) {
  return (
    <div className={css.index}>
      <div className={css.head}>
        <div className={cn(css.title, font.medium_40)}>
          {props.title}
        </div>

        <div className={cn(css.subtitle, font.medium_18)}>
          {props.subtitle}
        </div>
      </div>

      <div className={css.list}>
        {props.list.map((item: Product) => (
          <ProductCard
            key={item.id}
            card={item}
          />
        ))}
      </div>
    </div>
  );
}