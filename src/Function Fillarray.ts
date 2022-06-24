function  fillArray<T>(len: number, elem:T):T[]{
    return new Array<T>(len).fill(elem);
}

const arr11= fillArray<string>(20,'&');
// @ts-ignore
    document.write(arr11);