import css from './Card.module.css';
import { Stars } from './Stars';
import cn from 'classnames';
import font from '../../styles/fonts.module.css';
import { Testimonial } from '@/model/Testimonial';

interface CardProps {
  item: Testimonial;
}

export function Card(props: CardProps) {
  const { item } = props;

  return (
    <div className={css.index}>
      <picture className={css.picture}>
        <img
          className={css.image}
          src={item.image}
        />
      </picture>

      <Stars count={4}/>

      <div className={css.text}>
        <div className={cn(css.title, font.medium_22)}>
          {item.title}
        </div>

        <div className={cn(css.author, font.regular_18)}>
          {item.author}
        </div>
      </div>
    </div>
  );
}