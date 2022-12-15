// Mappers are used to define how the data is visualized in the response.
// And converting the response to Prisma layer

import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/Notifications';
import { Content } from '@app/entities/Content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  // DDD concept to converting prisma layer to understand the entitie application layer
  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
