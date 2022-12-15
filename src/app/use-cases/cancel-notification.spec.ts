import { Content } from '@app/entities/Content';
import { Notification } from '@app/entities/Notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notifications';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel Notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new Content('This is a test notification'),
      category: 'test',
      recipientId: 'testerWorker',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'not-existing-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });

  // Implement feature for the future...
  // it('should not be able to cancel a notification that has already been canceled', async () => {});
});
