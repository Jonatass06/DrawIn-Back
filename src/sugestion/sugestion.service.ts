import { Injectable } from '@nestjs/common';
import { CreateSugestionDto } from './dto/create-sugestion.dto';
import { UpdateSugestionDto } from './dto/update-sugestion.dto';

@Injectable()
export class SugestionService {
  create(createSugestionDto: CreateSugestionDto) {
    return 'This action adds a new sugestion';
  }

  findAll() {
    return `This action returns all sugestion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sugestion`;
  }

  update(id: number, updateSugestionDto: UpdateSugestionDto) {
    return `This action updates a #${id} sugestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} sugestion`;
  }
}
