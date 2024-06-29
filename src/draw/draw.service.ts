import { Injectable } from '@nestjs/common';
import { CreateDrawDto } from './dto/create-draw.dto';
import { UpdateDrawDto } from './dto/update-draw.dto';
import { ConnectorRepository } from 'src/connector/conector.repository';
import { connect } from 'http2';

@Injectable()
export class DrawService {
  constructor(private conector: ConnectorRepository) {}
  async create(createDrawDto: CreateDrawDto) {
    return this.conector.create('draw', {
      date: new Date(),
      genre: 'genre',
      name: 'name',
      id: 'id',
      reported: false,
      sizeX: 0,
      sizeY: 0,
      author: {
        connect:{
          id: 'ed4d7698-0d79-4bc4-85f1-897e78273e18',
        }
      },
      pic: {
        connect: {
          id: '4a1b171a-7b29-47da-ae28-db165fb361e7',
        }
      },
      theme: 'theme',
    });
  }

  findAll() {
    return `This action returns all draw`;
  }

  findOne(id: number) {
    return `This action returns a #${id} draw`;
  }

  update(id: number, updateDrawDto: UpdateDrawDto) {
    return `This action updates a #${id} draw`;
  }

  remove(id: number) {
    return `This action removes a #${id} draw`;
  }
}
