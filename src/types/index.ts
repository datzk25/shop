export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  category: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  sales: number;
  stock: number;
  image: string;
  tags?: string[];
  isFeatured?: boolean;
}

export interface TopUser {
  rank: number;
  name: string;
  avatar: string;
  id: string;
  amount: number;
}

export interface Transaction {
  id: string;
  user: string;
  product: string;
  amount: number;
  time: string;
  status: 'Thành công' | 'Đang xử lý' | 'Thất bại';
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  content: string;
  role: string;
}
