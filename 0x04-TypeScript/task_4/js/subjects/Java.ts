namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here's the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const exp = this.teacher.experienceTeachingJava;
      if (typeof exp === "number" && exp > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return `No available teacher`;
    }
  }
}
