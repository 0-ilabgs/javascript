
const student = [
    {Name: "Mukesh", markes: 80},
    {Name: "Shusil", markes: 55},
    {Name: "Pulung", markes: 22},
    {Name: "Kalikalang", markes: 37},
    {Name: "Chotu", markes: 18}
];
for(let i of student){
    console.log("This is for FOROF LOOP ", i);
}

// student.reverse();

// for(let i of student){
//     console.log("Printing array after applying reverse: " + i.Name + " " + i.markes);
// }

for(let x in student){
    console.log("This is for FORIN LOOP ", x);
}