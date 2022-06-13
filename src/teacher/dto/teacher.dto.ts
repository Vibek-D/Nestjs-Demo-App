import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindTeacherResponseDto {
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
