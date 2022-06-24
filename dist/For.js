"use strict";
function printString(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printString(['23', 'dfd', '323']);
// @ts-ignore
document.write(printString);
