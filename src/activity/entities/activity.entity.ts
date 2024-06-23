import { File } from 'src/file/entities/file.entity';

export class Activity {
  id: string;
  name: string;
  description: string;
  annex: File[];
  class: File;
}
