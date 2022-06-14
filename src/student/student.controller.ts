import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): StudentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  @UsePipes(ValidationPipe)
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
