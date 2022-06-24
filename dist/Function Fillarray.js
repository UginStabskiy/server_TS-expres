"use strict";
function fillArray(len, elem) {
    return new Array(len).fill(elem);
}
const arr11 = fillArray(20, '&');
// @ts-ignore
document.write(arr11);
