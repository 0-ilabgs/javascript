// Array of students with their grades and attendance
const students = [
  { name: "Priya", grade: 85, attendance: 95 },
  { name: "Arjun", grade: 72, attendance: 88 },
  { name: "Deepak", grade: 95, attendance: 98 },
  { name: "Kavita", grade: 68, attendance: 75 },
  { name: "Rahul", grade: 78, attendance: 92 },
];

// Use filter() to filter students with grades above 80 (Toppers) in a constant named toppers
const toppers = students.filter((student) => student.grade > 80);

// Use filter() to filter students with both high grades (above 80) and high attendance (above 90) in a constant named excellentStudents
const excellentStudents = students.filter((student) => student.grade > 80 && student.attendance > 90);
try {
  console.log("List of class toppers:", toppers);
  console.log("Students with excellent performance:", excellentStudents);
} catch {
  console.error("Please read the instructions carefully and try again");
}
