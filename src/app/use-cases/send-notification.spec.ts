import { Notification } from '../entities/Notifications';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notifications', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a test',
      category: 'test',
      recipientId: '123456',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
