
export interface MenuItem {
  name: string;
  price: string | number;
  description?: string;
  image?: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  isBestSeller?: boolean;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface NavLink {
  name: string;
  href: string;
}
