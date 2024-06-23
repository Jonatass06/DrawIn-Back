import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SugestionService } from './sugestion.service';
import { CreateSugestionDto } from './dto/create-sugestion.dto';
import { UpdateSugestionDto } from './dto/update-sugestion.dto';

@Controller('sugestion')
export class SugestionController {
  constructor(private readonly sugestionService: SugestionService) {}

  @Post()
  create(@Body() createSugestionDto: CreateSugestionDto) {
    return this.sugestionService.create(createSugestionDto);
  }

  @Get()
  findAll() {
    return this.sugestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sugestionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSugestionDto: UpdateSugestionDto,
  ) {
    return this.sugestionService.update(+id, updateSugestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sugestionService.remove(+id);
  }
}
