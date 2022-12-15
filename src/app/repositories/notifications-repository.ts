import { Notification } from '../entities/Notifications';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
