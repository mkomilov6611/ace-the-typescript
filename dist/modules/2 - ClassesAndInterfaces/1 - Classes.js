"use strict";
class Department {
    id;
    name;
    employees = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInfo() {
        console.log("Employees: " + this.employees);
    }
}
class ITDepartment extends Department {
    blackList = [];
    admins;
    constructor(id, admins) {
        super(id, ITDepartment.getITDepartmentName());
        this.admins = admins;
    }
    get blackListField() {
        return this.blackList;
    }
    set blackListField(blackList) {
        this.blackList = blackList;
    }
    static getITDepartmentName() {
        return "Information Technology";
    }
    describe() {
        console.log(`${ITDepartment.getITDepartmentName()} department plays a crucial role in any company`);
    }
    addEmployee(employee) {
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
it.blackListField = ["Aljamain Sterling"];
console.log("BlackList: " + it.blackListField);
it.addEmployee("Aljamain Sterling");
it.addEmployee("Paul");
it.printEmployeesInfo();
it.printAllAdmins();
class SingletonDepartment extends Department {
    static instance;
    constructor(id) {
        super(id, "Singleton");
    }
    static getInstance(id) {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new SingletonDepartment(id);
        return this.instance;
    }
    describe() {
        console.log(`${this.name} is a single instance`);
    }
}
const singleton = SingletonDepartment.getInstance(3);
singleton.describe();
//# sourceMappingURL=1%20-%20Classes.js.map