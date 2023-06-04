import { TestimonialList } from '.';
import '../../styles/color-styles.css';
import '../../styles/normalize.css';
import '@fontsource/poppins';
import authorImage from './img/img.png';

export default {
  title: 'Components/TestimonialList',
  component: TestimonialList,
  tags: [ 'autodocs' ],
  argTypes: {},
};

export function Desktop() {
  return (
      <TestimonialList
        title="Testimonials"
        subtitle="Some quotes from our happy customers"
        list={Array(3).fill({
          id: 10,
          image: authorImage,
          title: '“I love it! No more air fresheners”',
          author: 'Luisa',
        })}
      />
  );
}


export function Mobile375() {
  return (
    <TestimonialList
      title="Testimonials"
      subtitle="Some quotes from our happy customers"
      list={Array(3).fill({
        id: 10,
        image: authorImage,
        title: '“I love it! No more air fresheners”',
        author: 'Luisa',
      })}
    />
  );
}
Mobile375.parameters = {
  viewport: {
    defaultViewport: 'iphone_8',
  },
}

export function Mobile744() {
  return (
    <TestimonialList
      title="Testimonials"
      subtitle="Some quotes from our happy customers"
      list={Array(3).fill({
        id: 10,
        image: authorImage,
        title: '“I love it! No more air fresheners”',
        author: 'Luisa',
      })}
    />
  );
}
Mobile744.parameters = {
  viewport: {
    defaultViewport: 'ipad_mini',
  },
}