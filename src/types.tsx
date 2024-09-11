// src/types.ts

export interface Subcategory {
  item: string;
  cost: number;
  time?: number; // Optional, if not all subcategories have time
}

export interface CategoryData {
  category: string;
  cost: number;
  subcategories: Subcategory[];
}

export interface DemoData {
  breakdown: CategoryData[];
}
