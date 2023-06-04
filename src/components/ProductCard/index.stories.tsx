import { ProductCard } from '.';
import '../../styles/color-styles.css';
import '../../styles/normalize.css';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export function Desktop() {
  return (
    <div style={{
      padding: 100,
    }}>
      <ProductCard
        card={{
          id: 1,
          image: '',
          property: [],
        }}
      />
    </div>
  );
}
