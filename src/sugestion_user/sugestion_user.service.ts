import { Injectable } from '@nestjs/common';
import { CreateSugestionUserDto } from './dto/create-sugestion_user.dto';
import { UpdateSugestionUserDto } from './dto/update-sugestion_user.dto';

@Injectable()
export class SugestionUserService {
  create(createSugestionUserDto: CreateSugestionUserDto) {
    return 'This action adds a new sugestionUser';
  }

  findAll() {
    return `This action returns all sugestionUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sugestionUser`;
  }

  update(id: number, updateSugestionUserDto: UpdateSugestionUserDto) {
    return `This action updates a #${id} sugestionUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} sugestionUser`;
  }
}
