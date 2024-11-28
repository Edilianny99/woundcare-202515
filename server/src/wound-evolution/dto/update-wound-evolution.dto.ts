import { PartialType } from '@nestjs/swagger';
import { CreateWoundEvolutionDto } from './create-wound-evolution.dto';

export class UpdateWoundEvolutionDto extends PartialType(
  CreateWoundEvolutionDto,
) {}
