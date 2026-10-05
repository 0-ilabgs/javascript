let number = [1, 2, 3, 4, 5];

// 1.Use a for loop to print each number.
for(let i = 0; i< number.length; i++){
    console.log(number[i]);
}

// 2. Use a while loop to print each number.
let i = 0;
while(i<number.length){
    console.log(number[i]);
    i++;
}

// 3. Use a for-in loop to print each index.
for(let index in number){
    console.log(index);
}

// 4. Use a for-of loop to print each number.
for(let num of number){
    console.log(num);
}
