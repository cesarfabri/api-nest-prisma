import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { ContactsModule } from './contacts/contacts.module';
import { PhonesModule } from './phones/phones.module';
import { ProductsModule } from './products/products.module';
import { CompositionsModule } from './compositions/compositions.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    PrismaModule,
    ClientsModule,
    ContactsModule,
    PhonesModule,
    ProductsModule,
    CompositionsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
