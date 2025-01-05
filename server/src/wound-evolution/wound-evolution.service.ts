import { Injectable } from '@nestjs/common';
import { CreateWoundEvolutionDto } from './dto/create-wound-evolution.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  JsonArray,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime/library';
import {
  NotFoundError,
  UnexpectedError,
} from 'src/common/errors/service.error';
import { QuestionaireAnswer } from './wound-evolution-questionaire';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class WoundEvolutionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly notificationService: NotificationsService,
  ) {}

  async create(createWoundEvolutionDto: CreateWoundEvolutionDto) {
    const questionaireDto =
      createWoundEvolutionDto.questionaire as unknown as JsonArray;

    const result = await this.prismaService.woundEvolution.create({
      data: {
        medicalFileId: createWoundEvolutionDto.medicalFileId,
        questionaire: questionaireDto,
      },
    });

    await this.notifyBandageChange(
      createWoundEvolutionDto.questionaire,
      createWoundEvolutionDto.medicalFileId,
    );

    if (
      await this.isNotificationNecessary(createWoundEvolutionDto.questionaire)
    ) {
      const medicalFile = await this.prismaService.medicalFile.findUnique({
        where: { id: createWoundEvolutionDto.medicalFileId },
        include: { patient: { include: { user: true } } },
      });

      if (!medicalFile) {
        throw new NotFoundError('Medical file not found');
      }

      await this.notificationService.create({
        message: `El paciente ${medicalFile.patient.user.fullname} requiere atención`,
        userId: medicalFile?.nurseId,
        type: 'ALERT',
      });
    }

    return result;
  }

  async findAllEvolution(id: number) {
    return this.prismaService.woundEvolution.findMany({
      where: { medicalFileId: id },
    });
  }

  async findOne(id: number) {
    return this.prismaService.woundEvolution.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    try {
      return this.prismaService.woundEvolution.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundError(`there is no patient with the id ${id}`, {
            cause: error,
          });
        }
      }
      throw new UnexpectedError('an unexpected situation has ocurred', {
        cause: error,
      });
    }
  }

  async isNotificationNecessary(cuestionario: QuestionaireAnswer[]) {
    let count = 0;

    cuestionario.forEach((c) => {
      if (c.answer === 'yes' && c.key !== 'has-clean-bandages-on') {
        count++;
      }
    });

    return count >= 3;
  }

  async notifyBandageChange(
    questionaire: QuestionaireAnswer[],
    medicalFileId: number,
  ) {
    const bandageChangeQuestion = questionaire.find(
      (q) => q.key === 'has-clean-bandages-on',
    );

    if (bandageChangeQuestion?.answer === 'no') {
      const medicalFile = await this.prismaService.medicalFile.findUnique({
        where: { id: medicalFileId },
        include: { patient: { include: { user: true } } },
      });

      if (!medicalFile) {
        throw new NotFoundError('Medical file not found');
      }

      await this.notificationService.create({
        message: `El paciente ${medicalFile.patient.user.fullname} requiere cambio de vendaje`,
        userId: medicalFile?.nurseId,
        type: 'BANDAGE_CHANGE',
      });
    }
  }
}
