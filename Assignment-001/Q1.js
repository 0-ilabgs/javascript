const student = {
	Name : "Rahul",
    Age : 21,
    Courses : ["Math", "Physics", "Chemistry"]
};
 // Adding new property grade with the value “A”.	
student .grade = "A";

// Updating the age.
student.Age = 22;

// Deleting the course property.
delete student.Courses;
console.log(student);
