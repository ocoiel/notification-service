import { Content } from '@app/entities/Content';
import { Notification, NotificationProps } from '@app/entities/Notifications';

// Partial is a special type in typescript that can be used to create a new type
// of a existing type, but with the all properties nullable. Like this:
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a test notification'),
    category: 'test',
    recipientId: 'id-2',
    ...override,
  });
}
