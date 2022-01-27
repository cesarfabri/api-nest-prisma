import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompositionDto } from './dto/create-composition.dto';
import { UpdateCompositionDto } from './dto/update-composition.dto';

@Injectable()
export class CompositionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCompositionDto: CreateCompositionDto) {
    return await this.prisma.compositions.create({
      data: createCompositionDto,
    });
  }

  async findAll(id: string) {
    return await this.prisma.compositions.findMany({
      where: { fk_id_product: id },
      select: {
        id: true,
        name: true,
        quantity: true,
        price: true,
        unit: true,
        create_at: true,
      },
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} composition`;
  }

  async update(id: string, updateCompositionDto: UpdateCompositionDto) {
    const composition = await this.prisma.compositions.findFirst({
      where: { id },
    });

    if (!composition) {
      throw new NotFoundException(`Composition ID ${id} not found`);
    }

    updateCompositionDto.update_at = new Date();

    return await this.prisma.compositions.update({
      where: { id },
      data: updateCompositionDto,
    });
  }

  async remove(id: string) {
    const composition = await this.prisma.compositions.findFirst({
      where: { id },
    });

    if (!composition) {
      throw new NotFoundException(`Composition ID ${id} not found`);
    }

    return this.prisma.compositions.delete({
      where: { id },
    });
  }
}
