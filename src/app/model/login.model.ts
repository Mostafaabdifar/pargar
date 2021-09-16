export interface signUp{
  mobile:number,
  device_id:string,
  device_model:string,
  device_os:string
}
export interface code{
  mobile:number,
  device_id:string,
  verification_code:number,
  nickname:string
}
export interface Token{
  error: number;
  user_id: number;
  token: string;
  message: string;
  files_added: any[];
  nickname: string;
  fino_token: string;
}
export interface Sms {
  error: number;
  message: string;
  nickname: string;
}

