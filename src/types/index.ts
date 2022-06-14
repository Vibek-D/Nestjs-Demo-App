import { Exclude } from 'class-transformer';

export class SerializedStudent {
  id: string;
  name: string;
  teacher: string;

  @Exclude()
  password: string;
}
