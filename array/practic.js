let arr = [1, 2, 3,, 4, 5];
// console.log(arr.length);



let arr1 = Array.of(5);
// console.log(arr1);



let arr2 =Array();
// console.log(arr2.length);
arr2.push(10);
arr2.push(20);
arr2.push(30);
// console.log(arr2.length);
// console.log(arr2);



let arr3 = [1, 2, 3];
arr3.custom = "hello";
for (let key in arr3) {
    console.log(key);
} // 0, 1, 2, custom


let person = {
    name: "John",
    age: 30
};
for (let key in person) {
    if(key === "name") {
        console.log(person[key]);
    }
}


