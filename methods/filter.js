
const student = [
    {Name: "Mukesh", markes: 80},
    {Name: "Shusil", markes: 55},
    {Name: "Pulung", markes: 22},
    {Name: "Kalikalang", markes: 37},
    {Name: "Chotu", markes: 18}
];

// Faild student list.
const faildStudent = student.filter((elem, idx) => {
    if(elem.markes<=33){   
        return true;
    }
    else
        false;
});

// Pass student list.
const passStudent = student.filter((elem, idx) => {
    if(elem.markes>=33){
    return true;
    }
    else
        false;
});
console.log("Pass student: ",passStudent);
console.log("Faild student: ",faildStudent);