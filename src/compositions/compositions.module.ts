import { Module } from '@nestjs/common';
import { CompositionsService } from './compositions.service';
import { CompositionsController } from './compositions.controller';
import { ProductsService } from 'src/products/products.service';

@Module({
  controllers: [CompositionsController],
  providers: [CompositionsService],
  imports: [ProductsService],
})
export class CompositionsModule {}
