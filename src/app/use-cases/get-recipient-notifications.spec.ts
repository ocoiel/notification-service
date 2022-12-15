import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient Notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipientId-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipientId-1' }),
        expect.objectContaining({ recipientId: 'recipientId-1' }),
      ]),
    );
  });
});
