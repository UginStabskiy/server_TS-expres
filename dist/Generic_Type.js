"use strict";
const some_x = 3456;
console.log(some_x);
// масив будь-чого. Не розумію синтаксису
class ArrayOfAnything {
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
new ArrayOfAnything([0, 2, 3]); //  що тут відбувається
