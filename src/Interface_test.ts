// Interface

interface  IPerson {
    name: string
}

interface  IPerson {
    age: number
}

interface  IAccount {
    email: string;
    login: string;
    active: boolean;
}
// обєднання інтерфейсів
interface IDeveloper extends IPerson, IAccount{
    skills: string[];
    level: string;
}

const john: IDeveloper={
    name: 'John',
    age: 18,
    email:'somemail',
    login:"some_login",
    active:false,
    skills:["some_arr"],
    level: '1lvl',
}
console.log(john);


// type


type  TPerson= {
    name: string
    age: number
}

type  TAccount = {
    email: string;
    login: string;
    active: boolean;
    skills:string [];
    level: string;
}
// обєднання типів
type TDeveloper = TPerson & TAccount;

const Bob: TDeveloper={
    name: 'Bob',
    age: 19,
    email:'somemail',
    login:"some_login",
    active:false,
    skills:["some_arr"],
    level: '1lvl',
}
console.log(Bob);