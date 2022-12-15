import { Content } from '@app/entities/Content';
import { Notification } from '@app/entities/Notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-notifications';

describe('Count recipient Notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipientId-1',
    });

    expect(count).toEqual(2);
  });
});
