import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  @UsePipes(ValidationPipe)
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  @UsePipes(ValidationPipe)
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}
