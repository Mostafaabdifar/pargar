export interface Profile {
  credit: Credit;
  magic_credit: Magic;
  id: number;
  friends: any[];
  error: boolean;
  nickname: string;
  date_of_birth?: any;
  gender?: any;
  avatar: string;
  mobile: string;
  email?: any;
  has_supercollection: boolean;
  isp_data: IspData;
}

export interface Credit {
  gem: number;
  coin: number;
  cash: number;
  price_unit: string;
}

export interface Magic {
  gem: number;
  coin: number;
  cash: number;
  price_unit: string;
}

export interface IspData {
  description: string;
  net_name: string;
  net_name_custom?: any;
  logo?: any;
  color1?: any;
  color2?: any;
}