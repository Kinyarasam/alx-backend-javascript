/// <reference path="Teacher.ts" />
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const exp = this.teacher.experienceTeachingC;
      if (typeof exp === 'number' && exp > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
