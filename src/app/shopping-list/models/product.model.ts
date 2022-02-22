export interface Product {
  id: number;
  imageUrl: string;
  rating: number;
  price: number;
  name: string;
  description: string;
  //   quantity: number;
  quantity?: number;
}

// export interface ProductSummary extends Product {
//   quantity: number;
// }
