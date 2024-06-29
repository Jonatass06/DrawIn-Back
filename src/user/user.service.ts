import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConnectorRepository } from 'src/connector/conector.repository';

@Injectable()
export class UserService {
  constructor(private conector: ConnectorRepository) {}

  create(createUserDto: CreateUserDto) {
    const user = {
      name: createUserDto.name,
      isAdvancedUser: false,
    };
    return this.conector.create('user', user);
  }

  findAll() {
    return this.conector.findMany('user'); 
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
