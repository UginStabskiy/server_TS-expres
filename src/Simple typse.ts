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

const tuple1:[string,string,number]=['abc','cd',4];
    console.log(tuple1);

const example:[string,string,number][]=[['bc','cad',43]];
    console.log(example);

const arr5=['qwe','adc',888];
// @ts-ignore
document.write(arr5);

let elofarr=arr5[2];
// @ts-ignore
document.write(elofarr);

let elofarr1=arr5.pop();
// @ts-ignore
document.write(elofarr1);

const obj: {
    a: number;
    b: number;
    c: string;
}= {a:1, b:2, c:'abc'};
// @ts-ignore
let elofarr2=obj["b"];
// @ts-ignore
document.write(elofarr2);

// type

type MyObj ={
    a: number;
    b: string;
    c: string;
    [key:string]:string|number;
    //f?: number; // чомусь не працює?
}
const obj1:MyObj={a:4,b:'fef',c:'abcd'};
console.log(obj1);
const obj2:MyObj={a:56546,b:'fegrgf',c:'abascd'};
console.log(obj2);
const obj3:MyObj={a:56546,b:'fegrgf', c:'fegrgf', n:4,k:'fegrgf', m:'fegrgf'};
console.log(obj3);




















