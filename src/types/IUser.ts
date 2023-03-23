export interface IReg {
  name: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
}

export type authState = {
  data: IReg | null;
  isLoading: boolean;
};

export interface IAuth {
  mail: string;
  password: string;
}
