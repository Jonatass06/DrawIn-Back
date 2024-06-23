import { Sugestion } from 'src/sugestion/entities/sugestion.entity';
import { User } from 'src/user/entities/user.entity';
import { SugestionStatus } from '../enum/sugestion_status.enum';

export class SugestionUser {
  id: string;
  sugestion: Sugestion;
  user: User;
  status: SugestionStatus;
}
