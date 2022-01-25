import { Prisma } from '@prisma/client';

export class Contact implements Prisma.ContactsUncheckedCreateInput {
  id?: string;
  name: string;
  comments: string;
  fk_id_client: string;
  Phones?: Prisma.PhonesUncheckedCreateNestedManyWithoutContactInput;
}
