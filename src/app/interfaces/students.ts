import { Address } from './address';

export interface Students {
  id: string,
  name: string,
  lastname: string,
  birthday: Date,
  occupation: string
  email: string,
  phone: string,
  address: Address
}
