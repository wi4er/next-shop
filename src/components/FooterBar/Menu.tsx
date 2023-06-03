import css from './Menu.module.css';
import font from '../../styles/fonts.module.css';
import cn from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  list: Array<{
    name: string,
    link: string,
  }>;
}

export function Menu(props: MenuProps) {
  return (
    <div className={css.index}>
      <div className={cn(css.title, font.medium_16)}>
        {props.title}
      </div>

      <div className={css.list}>
        {props.list.map(item => (
          <Link
            href={item.link}
            className={cn(css.item, font.medium_16)}
            key={item.name}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}