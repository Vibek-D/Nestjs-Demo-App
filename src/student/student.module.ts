import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { ValidStudentMiddleware } from '@middlewares/validStudent.middleware';
import { logger } from '@helpers/logger';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger, ValidStudentMiddleware)
      .exclude(
        {
          path: 'api/students',
          method: RequestMethod.GET,
        },
        {
          path: 'api/students',
          method: RequestMethod.POST,
        },
      )
      .forRoutes(StudentController);
  }
}
