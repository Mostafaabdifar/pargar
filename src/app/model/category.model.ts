
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