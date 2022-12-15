import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../app/entities/Notifications';
import { NotificationsRepository } from '../../../../app/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../primsa.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  countManyByRecipientId(recipientId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }
  findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    throw new Error('Method not implemented.');
  }
  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
