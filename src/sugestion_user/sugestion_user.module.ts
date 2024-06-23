import { Module } from '@nestjs/common';
import { SugestionUserService } from './sugestion_user.service';
import { SugestionUserController } from './sugestion_user.controller';

@Module({
  controllers: [SugestionUserController],
  providers: [SugestionUserService],
})
export class SugestionUserModule {}
