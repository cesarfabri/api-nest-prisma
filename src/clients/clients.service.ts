import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClientDto: CreateClientDto) {
    return this.prisma.clients.create({
      data: createClientDto,
    });
  }

  findAll() {
    return this.prisma.clients.findMany();
  }

  findOne(id: string) {
    return this.prisma.clients.findFirst({
      where: { id },
    });
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    updateClientDto.update_at = new Date();

    return this.prisma.clients.update({
      where: { id },
      data: updateClientDto,
    });
  }

  remove(id: string) {
    return this.prisma.clients.delete({
      where: { id },
    });
  }
}
