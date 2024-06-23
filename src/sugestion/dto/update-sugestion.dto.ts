import { PartialType } from '@nestjs/mapped-types';
import { CreateSugestionDto } from './create-sugestion.dto';

export class UpdateSugestionDto extends PartialType(CreateSugestionDto) {}
