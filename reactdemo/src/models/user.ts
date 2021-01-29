export interface IUser {
    id: string;
    picture: string;
    age: number;
    name: IUserNameInfo;
    company: string;
    email: string;
    phone: string;
    address: string;
  }
  
  export interface IUserNameInfo {
    first: string;
    last: string;
  }