// Design a class for employee which takes id and name in durin construction of object and has a salary property

class Employee {
    constructor(id, name) {
        if(!id || !name){
            throw new Error('id and name is mandatory')
        }
        this.id = id,
        this.name = name
    }
    setSalary(salary){
        this.salary = salary;
    }
    getId(id){
       return this.id = id;
    }
    getName(name){
       return this.name = name;
    }
    getSalary(salary){
       return this.salary = salary;
    }
}
const employee = new Employee(1, 'jhon');
employee.setSalary(1000)

console.log(employee) //Employee { id: 1, name: 'jhon', salary: 1000 }