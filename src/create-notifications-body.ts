import { IsNotEmpty } from 'class-validator';

export class CreateNotificationsBody {
  @IsNotEmpty()
  recipientId: string;

  content: string;
  category: string;
}
