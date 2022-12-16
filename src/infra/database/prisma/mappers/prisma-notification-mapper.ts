// Mappers are used to define how the data is visualized in the response.
// And converting the response to Prisma layer
// Disclaimer: There are the diffence between App Layer (Entitie Notification)
// and Persistent Layer (Prisma and Database)

import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/Notifications';
import { Content } from '@app/entities/Content';

// DDD concept to converting prisma layer to understand the entitie application layer
export class PrismaNotificationMapper {
  // conversion to persistence layer
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
  // conversion to domain layer
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
