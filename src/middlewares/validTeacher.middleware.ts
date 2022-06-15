import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { teachers } from '../db';

@Injectable()
export class ValidTeacherMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const teacherId = req.params.teacherId;
    const studentExists = teachers.some((teacher) => {
      return teacher.id === teacherId;
    });
    if (!studentExists) {
      throw new HttpException(
        `Teacher with id: ${teacherId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    next();
  }
}
