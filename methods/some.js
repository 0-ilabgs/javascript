// Array of students with their grades and attendance
const students = [
  { name: "Priya", grade: 85, attendance: 95 },
  { name: "Arjun", grade: 72, attendance: 88 },
  { name: "Deepak", grade: 95, attendance: 98 },
  { name: "Kavita", grade: 68, attendance: 75 },
  { name: "Rahul", grade: 78, attendance: 92 },
];

// Check if any student has a grade above 90 (Honor Roll)
const hasHonorStudent = students.some((student)=>student.grade > 90);

// Check if any student has attendance below 60% (Attendance Warning)
const hasAttendanceIssue = students.some((student) => student.attendance < 60);
try {
  console.log("Is there at least one student with 90+ grade?", hasHonorStudent);
  console.log(
    "Is there any student with attendance < 60%?",
    hasAttendanceIssue
  );
} catch {
  console.error("Please read the instructions carefully and try again");
}
