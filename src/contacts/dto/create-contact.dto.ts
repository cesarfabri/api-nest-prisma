import { IsString, IsUUID } from 'class-validator';
import { Contact } from '../entities/contact.entity';

export class CreateContactDto extends Contact {
  @IsString()
  name: string;
  @IsString()
  comments: string;
  @IsUUID()
  fk_id_client: string;
}
