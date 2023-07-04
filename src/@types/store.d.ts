export interface IAccount {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IGlobalState {
  signed: boolean;
  accounts: IAccount[];
}

export interface IRootState {
  global: IGlobalState;
}
