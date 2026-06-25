const scores = [8, 9, 7, 10, 8, 6, 5, 8, 9, 7];
const selectedScore = scores[3];

// Implement the switch-case statement to print the grade based on the selected score.
let grade;

switch (selectedScore){
    case 10:
    
    
    break;
    case 9:

        grade = "A";

        console.log(`Score : ${selectedScore}`);

        console.log(`Grade: ${grade}`);

        console.log("Excellent work! Keep it up!");

    break;

  case 8:

        grade = "B";

        console.log(`Score: ${selectedScore}`);

        console.log(`Grade: ${grade}`);

        console.log("Good job! You're doing well!");

    break;

  case 7:

        grade = "C";

        console.log(`Score: ${selectedScore}`);

        console.log(`Grade: ${grade}`);

        console.log("Satisfactory. There's room for improvement.");

    break;

  case 6:

        grade = "D";

        console.log(`Score: ${selectedScore}`);

        console.log(`Grade: ${grade}`);

        console.log("You need to work harder. Consider getting help.");

    break;

  default:

        grade = "F";

        console.log(`Score: ${selectedScore}`);

        console.log(`Grade: ${grade}`);

        console.log("Failed. Please meet with your teacher for support.");

}
