import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(3, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
