import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

export class CreateWoundEvolutionDto {
  @IsString()
  medicalFileId: number;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => WoundEvolutionAnswerDto)
  questionaire: Array<WoundEvolutionAnswerDto>;
}

class WoundEvolutionAnswerDto {
  @IsString()
  key: string;

  @IsString()
  answer: string;
}
