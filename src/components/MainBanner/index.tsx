import css from './index.module.css';
import font from '../../styles/fonts.module.css';
import { Button, ButtonSize } from '../../view/Button';
import cn from 'classnames';

export function MainBanner() {
  return (
    <section className={css.index}>
      <div className={css.info}>
        <div>
          <div className={cn(font.medium_40, css.title)}>
            🌱 <br/> The nature candle
          </div>

          <div className={cn(css.description, font.regular_18)}>
            All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
          </div>
        </div>

        <Button
          size={ButtonSize.SMALL}
          onClick={() => {}}
        >
          Discovery our collection
        </Button>
      </div>
    </section>
  );
}