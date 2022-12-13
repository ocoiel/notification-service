import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './primsa.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationsBody } from './create-notifications-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { recipientId, content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
