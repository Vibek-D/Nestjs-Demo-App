import { Injectable, SerializeOptions } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { plainToClass } from 'class-transformer';
import { SerializedStudent } from 'src/types';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): StudentResponseDto[] {
    return this.students.map((student) =>
      plainToClass(SerializedStudent, student),
    );
  }

  getStudentById(id: string): StudentResponseDto {
    return this.students.find((student) => {
      return student.id === id;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, id: string): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = {
          id,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): StudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
