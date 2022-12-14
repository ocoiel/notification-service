import { Content } from './Content';
import { Notification } from './Notifications';

describe('Notification', () => {
  it('shold be able to crate a notification', () => {
    const notification = new Notification({
      content: new Content('Job notification request'),
      category: 'job',
      recipientId: '123-john-doe',
    });

    expect(notification).toBeTruthy();
  });
});
