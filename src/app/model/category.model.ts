export interface MainObject {
  id: number;
  parent_categories: ParentCategory[];
  name: string;
  category: any[];
  tabStrip: any[];
  headeritem: ProductItem[];
  homeitem: HomeItem[];
}
export interface RootMenu {
  id: number;
  is_default: boolean;
  title: string;
  avatar?: any;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent?: any;
}
export interface RootList{
  id:number;
  parent_categories: RootMenu[];
}

export interface Support {
  name: string;
  tel: string;
  email: string;
  website: string;
  linkedin: string;
  google_plus: string;
  instagram: string;
  telegram: string;
}

export interface FeatureAvatar {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

export interface Avatar {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}
export interface Avatar2 {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
} 
export interface FeatureAvatar_sec {
  xxxdpi: string;
  xxhdpi: string;
  xhdpi: string;
  hdpi: string;
  mdpi: string;
}

export interface ParentCategory {
  id: number;
  is_default: boolean;
  title: string;
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent?: any;
  childs: Child[];
}
export interface Child {
  id: number;
  is_default: boolean;
  title: string;  
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
  childs: secondChild[];
}
export interface secondChild {
  id: number;
  is_default: boolean;
  title: string;
  avatar: string;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
  childs: any[];
}
export interface ProductItem {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer_name: string;
  payment_type: number[];
  price: number;
  price_show?: any;
  avatar: Avatar;
  feature_avatar: FeatureAvatar;
  rank: number;
  short_description: string;
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  price_unit: string;
  total_view: number;
  date_added: Date;
  invest_goal?: any;
  product_staff: any[];
  support: Support;
  is_special: boolean;
  additional_attributes: any[];
  date_published: Date;
  customjson?: any;
  approved_age?: any;
}
export interface CategoryModel {
  id: number;
  is_default: boolean;
  title: string;
  avatar?: any;
  position: number;
  is_enable: boolean;
  is_visible: boolean;
  parent: number;
}

export interface Customjson {
  asset_id: number;
}

export interface Product {
  id: number;
  name: string;
  name_english: string;
  product_type: number;
  producer_name: string;
  payment_type: number[];
  products: Product[];
  price: number;
  price_show?: any;
  avatar: Avatar2;
  feature_avatar: FeatureAvatar_sec;
  rank: number;
  short_description: string;
  is_purchased: boolean;
  comments: number;
  is_bookmarked: boolean;
  sku: string;
  price_unit: string;
  total_view: number;
  date_added: Date;
  invest_goal?: any;
  product_staff: any[];
  support: Support2;
  is_special: boolean;
  additional_attributes: any[];
  date_published: Date;
  customjson: Customjson;
  approved_age?: any;
  category: number[];
  description: string;
  category_model: CategoryModel[];
}

export interface Support2 {
  name: string;
  tel: string;
  email: string;
  website: string;
  linkedin: string;
  google_plus: string;
  instagram: string;
  telegram: string;
}
export interface HomeItem {
  id: number;
  title: string;
  sub_title: string;
  position: number;
  module: number;
  banner?: any;
  row_type: string;
  products: Product[];
  row_mode: number;
}

