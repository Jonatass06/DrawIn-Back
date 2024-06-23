import { User } from 'src/user/entities/user.entity';
import { Audience } from '../enums/audience.enum';
import { File } from 'src/file/entities/file.entity';
import { Activity } from 'src/activity/entities/activity.entity';

export class Course {
  id: string;
  name: string;
  description: string;
  date: Date;
  workload: number;
  audience: Audience;
  teacher: User;
  materials: File[];
  classes: File[];
  students: User[];
  activities: Activity[];
  reported: boolean;
}
