import css from './index.module.css';
import font from '../../styles/fonts.module.css';
import { Testimonial } from '@/model/Testimonial';
import { Stars } from './Stars';
import cn from 'classnames';
import { Card } from './Card';

interface TestimonialListProps {
  list: Testimonial[];
  title: string;
  subtitle: string;
}

export function TestimonialList(props: TestimonialListProps) {
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
        {props.list.map(item => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}