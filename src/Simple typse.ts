let x: string = "Всяке різне"
    document.write(x);

let x1: number = 475
    console.log(x1)  // як вивести результат?


let x2: boolean = false
    console.log(x2); // як вивести данні у термінал?

type Score = number | string;

const myScore:Score =10
    console.log(myScore)
const myScore1:Score = "10"
    document.write(myScore1)


let x3: number = JSON.parse("6");
console.log(x3);
let isOdd: boolean;
let y:number=22;
isOdd = y % 2 !== 0;

// Списки і кортежі

const arr: string[] = [" ab ","  bc  ","  mn  "];
    arr.push("G1")
    // @ts-ignore
document.write(arr);

const arr1: number[] = [1,6,9];
    // @ts-ignore
document.write(arr1);

//const arr3 : number[] | string[]=[] //чомусь не працює
//arr3.push( 2,"32")

// Типи

type  MyType = (string|number)[];

const arr4:MyType=[1,3,4,5,"rere"];
// @ts-ignore
document.write(arr4);

// Кортежи
