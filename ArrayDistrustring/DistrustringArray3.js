// const arr = [100, 200, 300];
// const arr1[first, second] = arr;

const [first, second] = [100, 200, 300];
console.log(first, second);

const [a, b=10]=[50];
console.log(a, b);

const arr = [1, 2, 3, 4];
const[c, , d]=arr;
console.log(c,"", d);