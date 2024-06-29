import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConnectorRepository } from 'src/connector/conector.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, ConnectorRepository],
})
export class UserModule {}
