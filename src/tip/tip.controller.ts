import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipService } from './tip.service';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';

@Controller('tip')
export class TipController {
  constructor(private readonly tipService: TipService) {}

  @Post()
  create(@Body() createTipDto: CreateTipDto) {
    return this.tipService.create(createTipDto);
  }

  @Get()
  findAll() {
    return this.tipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipDto: UpdateTipDto) {
    return this.tipService.update(+id, updateTipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipService.remove(+id);
  }
}
