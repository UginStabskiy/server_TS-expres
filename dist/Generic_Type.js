"use strict";
//type  TypeFactory<x>=x;
//type MyType = TypeFactory<number>;
//const some_x: MyType =3456;
//console.log(some_x)
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
