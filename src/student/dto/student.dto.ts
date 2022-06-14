import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  teacher: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class StudentResponseDto {
  @IsNotEmpty()
  @IsNumber()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  teacher: string;
}

export class UpdateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  teacher: string;
}
