// You are working on a project that involves managing a list of employees. Each employee has a name, an age, and an optional phone number.
//You need to define an interface for an employee object that includes the optional phone number property.

interface Employee {
    name: string,
    age: number,
    phoneNumber?: string
}


const emp1: Employee = {
    name: "John Doe",
    age:32,
    phoneNumber: "+251987328322"
}

const emp2: Employee = {
    name: "Jane Doe",
    age: 22
}