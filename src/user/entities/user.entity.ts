import { Course } from 'src/course/entities/course.entity';
import { Draw } from 'src/draw/entities/draw.entity';
import { SugestionUser } from 'src/sugestion_user/entities/sugestion_user.entity';

export class User {
  id: string;
  name: string;
  draws: Draw[];
  courses: Course[];
  subscriptions: Course[];
  likedDraws: Draw[];
  userSugestions: SugestionUser[];
  isAdvancedUser: boolean;
}
