

const result = [
    {
        name: "sumit",
        marks: 55

    },
    {
        name: "Gaurav",
        marks: 16
    },
    {
        name: "sonu",
        marks: 77
    },
    {
        name: "zila",
        marks: 90
    }
];

const findIndexFaildStudent = result.findIndex((results) => {
    if(results.marks<33){
        return true;
    }
    return false;
})

console.log(findIndexFaildStudent);