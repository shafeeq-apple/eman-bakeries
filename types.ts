export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  isHospitalSafe?: boolean;
}

export interface Category {
  id: string;
  label: string;
  description: string;
  products: Product[];
}

export enum TabIDs {
  ESSENTIALS = 'essentials',
  SANDWICH = 'sandwich',
  BURGERS = 'burgers',
  RUSKS = 'rusks',
  HORECA = 'horeca',
}