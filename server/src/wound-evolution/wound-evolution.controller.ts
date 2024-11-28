import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WoundEvolutionService } from './wound-evolution.service';
import { CreateWoundEvolutionDto } from './dto/create-wound-evolution.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('wound-evolution')
@ApiTags('wound-evolution')
export class WoundEvolutionController {
  constructor(private readonly woundEvolutionService: WoundEvolutionService) {}

  @Post()
  create(@Body() createWoundEvolutionDto: CreateWoundEvolutionDto) {
    return this.woundEvolutionService.create(createWoundEvolutionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.woundEvolutionService.findOne(+id);
  }

  @Get('medical-file/:id')
  findEvolutionByMedicalFile(@Param('id') id: string) {
    return this.woundEvolutionService.findAllEvolution(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.woundEvolutionService.remove(+id);
  }
}
