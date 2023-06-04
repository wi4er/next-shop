import React from 'react';
import { MainBanner } from '@/components/MainBanner';
import { ProductList } from '@/components/ProductList';
import productImage from '@/components/ProductCard/img/product image.png';
import { TestimonialList } from '@/components/TestimonialList';
import authorImage from '@/components/TestimonialList/img/img.png';

function HomePage() {
  return (
    <main>
      <MainBanner/>

      <ProductList
        title="Products"
        subtitle="Order it for you or for your beloved ones"
        list={Array(7).fill({
          id: 10,
          property: [],
          image: productImage.src,
        })}
      />

      <TestimonialList
        title="Testimonials"
        subtitle="Some quotes from our happy customers"
        list={Array(3).fill({
          id: 10,
          image: authorImage.src,
          title: '“I love it! No more air fresheners”',
          author: 'Luisa',
        })}
      />

      <ProductList
        title="Popular"
        subtitle="Our top selling product that you may like"
        list={Array(4).fill({
          id: 10,
          property: [],
          image: productImage.src,
        })}
      />
    </main>
  );
}

export default HomePage;