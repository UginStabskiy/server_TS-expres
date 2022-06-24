var some_x = 3456;
console.log(some_x);
// масив будь-чого. Не розумію синтаксису
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
new ArrayOfAnything([0, 2, 3]); //  що тут відбувається
