abstract class Department {
  protected employees: string[] = []; // Protected so that child class have access

  constructor(protected readonly id: Number, protected name: string) {}

  abstract describe(): void;

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo(this: Department) {
    console.log("Employees: " + this.employees);
  }
}

/* ITDeparment DEMO */

class ITDepartment extends Department {
  private blackList: string[] = [];
  private admins: string[];

  constructor(id: Number, admins: string[]) {
    super(id, ITDepartment.getITDepartmentName());

    this.admins = admins;
  }

  get blackListField(): string[] {
    return this.blackList;
  }

  set blackListField(blackList: string[]) {
    this.blackList = blackList;
  }

  static getITDepartmentName(): string {
    return "Information Technology";
  }

  describe(): void {
    //Abstract method implementation
    console.log(
      `${ITDepartment.getITDepartmentName()} department plays a crucial role in any company`
    );
  }

  addEmployee(this: ITDepartment, employee: string): void {
    //Parent class method re-implementation
    if (this.blackList.includes(employee)) {
      console.log("Could not add this employee: " + employee);
      return;
    }

    this.employees.push(employee);
  }

  printAllAdmins() {
    console.log("Admins: " + this.admins);
  }
}

const it = new ITDepartment(2, ["Muxammad, John"]);
it.describe();

it.blackListField = ["Aljamain Sterling"]; // Set and Get Proxies
console.log("BlackList: " + it.blackListField);

it.addEmployee("Aljamain Sterling");
it.addEmployee("Paul");
it.printEmployeesInfo();

it.printAllAdmins();

/* Singleton Demo */

class SingletonDepartment extends Department {
  private static instance: SingletonDepartment;

  private constructor(id: Number) {
    super(id, "Singleton");
  }

  static getInstance(id: Number) {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new SingletonDepartment(id);

    return this.instance;
  }

  describe(): void {
    console.log(`${this.name} is a single instance`);
  }
}

const singleton = SingletonDepartment.getInstance(3);

singleton.describe();
