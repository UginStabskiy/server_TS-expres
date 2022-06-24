type  TypeFactory<x>=x;

type MyType1 = TypeFactory<number>;

const some_x: MyType1 =3456;
console.log(some_x)
// масив будь-чого. Не розумію синтаксису
class ArrayOfAnything <Type> {
    constructor (public collection: Type[]) {}
    get (index:number):Type {
        return this.collection[index];
    }
}
 new ArrayOfAnything<number>([0, 2, 3]) //  що тут відбувається