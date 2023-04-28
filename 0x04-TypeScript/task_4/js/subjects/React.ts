namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here's the list of requirements for React";
    }

    getAvailableTeacher(): string {
      const exp = this.teacher.experienceTeachingReact;
      if (typeof exp === 'number' && exp > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return `No available teacher`;
    } 
  }
}
