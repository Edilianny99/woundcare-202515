import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  conversationId: number;

  @IsString()
  @IsOptional()
  text?: string;

  @IsString()
  @IsOptional()
  image?: string;
}
