import { Injectable } from '@nestjs/common';
import { CreateCompositionDto } from './dto/create-composition.dto';
import { UpdateCompositionDto } from './dto/update-composition.dto';

@Injectable()
export class CompositionsService {
  create(createCompositionDto: CreateCompositionDto) {
    return 'This action adds a new composition';
  }

  findAll() {
    return `This action returns all compositions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} composition`;
  }

  update(id: number, updateCompositionDto: UpdateCompositionDto) {
    return `This action updates a #${id} composition`;
  }

  remove(id: number) {
    return `This action removes a #${id} composition`;
  }
}
