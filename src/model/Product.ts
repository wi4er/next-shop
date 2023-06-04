

interface ProductProperty {
  property: string;

  value: string;
}

export interface Product {
  id: number;
  image: string;
  property: ProductProperty[];
}