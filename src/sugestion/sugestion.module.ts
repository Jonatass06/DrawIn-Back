import { Module } from '@nestjs/common';
import { SugestionService } from './sugestion.service';
import { SugestionController } from './sugestion.controller';

@Module({
  controllers: [SugestionController],
  providers: [SugestionService],
})
export class SugestionModule {}
