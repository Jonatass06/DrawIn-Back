import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SugestionUserService } from './sugestion_user.service';
import { CreateSugestionUserDto } from './dto/create-sugestion_user.dto';
import { UpdateSugestionUserDto } from './dto/update-sugestion_user.dto';

@Controller('sugestion-user')
export class SugestionUserController {
  constructor(private readonly sugestionUserService: SugestionUserService) {}

  @Post()
  create(@Body() createSugestionUserDto: CreateSugestionUserDto) {
    return this.sugestionUserService.create(createSugestionUserDto);
  }

  @Get()
  findAll() {
    return this.sugestionUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sugestionUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSugestionUserDto: UpdateSugestionUserDto,
  ) {
    return this.sugestionUserService.update(+id, updateSugestionUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sugestionUserService.remove(+id);
  }
}
