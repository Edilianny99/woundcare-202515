import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString, ValidateNested } from 'class-validator';

export class CreateWoundEvolutionDto {
  @IsNumber()
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
