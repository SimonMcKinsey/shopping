export interface Product {
  id: number;
  imageUrl: string;
  rating: number;
  price: number;
  name: string;
  description: string;
  quantity?: number; // For server side this is relevant, as we can actually know how many are left. Not for this scope for assignment
}
