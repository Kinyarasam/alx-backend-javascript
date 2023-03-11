/// <reference path="Teacher.ts" />
namespace Subjects {
  export interface Subject {
    teacher: Subjects.Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
