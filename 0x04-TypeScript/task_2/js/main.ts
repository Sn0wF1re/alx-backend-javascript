interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() : string {
    return 'Working from home';
  }

  getCoffeeBreak() : string {
    return 'Getting a coffee break';
  }

  workDirectorTasks() : string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() : string {
    return 'Cannot work from home';
  }

  getCoffeeBreak() : string {
    return 'Cannot have a break';
  }

  workTeacherTasks() : string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string) : Director | Teacher {
  return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

function isDirector(employee: Teacher | Director) : boolean {
  return employee instanceOf Director;
}

function executeWork(employee: Teacher | Director) : string {
  let findType = isDirector(employee);
  let result;
  findType ? result = (employee as Director).workDirectorTasks() : result = (employee as Teacher).workTeacherTasks();
  return result;
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects: 'Math' | 'History';

function teachClass(todayClass: Subjects) : string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
