import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Read Notifications', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to read a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });

  // Implement feature for the future...
  // it('should not be able to cancel a notification that has already been canceled', async () => {});
});
