import { SendNotification } from './send-notification';

describe('Send Notifications', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a test',
      category: 'test',
      recipientId: '123456',
    });

    expect(notification).toBeTruthy();
  });
});
