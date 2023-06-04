import { ProductList } from '.';
import '../../styles/color-styles.css';
import '../../styles/normalize.css';
import productImage from './img/product.png';

export default {
  title: 'Components/ProductList',
  component: ProductList,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export function Desktop() {
  return (
    <div style={{
      padding: 100,
    }}>
      <ProductList
        title="Products"
        subtitle="Order it for you or for your beloved ones "
        list={Array(7).fill({
          id: 10,
          image: productImage,
          property: [],
        })}
      />
    </div>
  );
}
