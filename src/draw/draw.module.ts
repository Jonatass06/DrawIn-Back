import { Module } from '@nestjs/common';
import { DrawService } from './draw.service';
import { DrawController } from './draw.controller';
import { ConnectorRepository } from 'src/connector/conector.repository';

@Module({
  controllers: [DrawController],
  providers: [DrawService, ConnectorRepository],
})
export class DrawModule {}
