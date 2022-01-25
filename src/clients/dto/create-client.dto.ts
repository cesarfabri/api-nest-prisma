import { Client } from '../entities/client.entity';

export class CreateClientDto extends Client {
  name: string;
  address: string;
  number: string;
  district: string;
  city: string;
  state: string;
  zipcode: string;
}
