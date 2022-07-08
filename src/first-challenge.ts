// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */


// Solução A
let employee_A: {code: number, name: string} = {
    code: 10,
    name: "John"
}


// Solução B
let employee_B = {
    code: 10,
    name: "John"
}


// Solução C
interface IEmployee{
    code: number;
    name: string;
}

let employee_C: IEmployee = {
    code: 2,
    name: "John"
}