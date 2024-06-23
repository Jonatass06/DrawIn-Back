import { PartialType } from '@nestjs/mapped-types';
import { CreateSugestionUserDto } from './create-sugestion_user.dto';

export class UpdateSugestionUserDto extends PartialType(
  CreateSugestionUserDto,
) {}
