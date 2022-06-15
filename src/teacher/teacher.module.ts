import { logger } from '@helpers/logger';
import { ValidTeacherMiddleware } from '@middlewares/validTeacher.middleware';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentsModule],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger, ValidTeacherMiddleware).forRoutes({
      path: 'api/teachers/:teacherId',
      method: RequestMethod.GET,
    });
  }
}
