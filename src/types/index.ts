export interface Category {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export interface SearchFormData {
  destination: string;
  serviceType: string;
  date: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
  location: string;
  price: string;
  rating: number;
}

export interface ApiResponse {
  success: boolean;
  data?: SearchResult[];
  error?: string;
}
