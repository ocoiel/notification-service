import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notifications';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Read Notifications', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });

  // Implement feature for the future...
  // it('should not be able to cancel a notification that has already been canceled', async () => {});
});
