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