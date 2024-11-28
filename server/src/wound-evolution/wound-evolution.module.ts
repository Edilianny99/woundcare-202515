import { Module } from '@nestjs/common';
import { WoundEvolutionService } from './wound-evolution.service';
import { WoundEvolutionController } from './wound-evolution.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WoundEvolutionController],
  providers: [WoundEvolutionService],
  exports: [WoundEvolutionService],
})
export class WoundEvolutionModule {}
