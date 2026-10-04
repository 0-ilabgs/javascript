const scores = [
  ["Math", 85],
  ["Science", 92],
  ["History", 78],
  ["English", 88],
];

// Sort scores array by subject name (alphanumeric)
const sortedBySubject = scores.slice().sort((a,b) => {
    if(a[0]<b[0]) return -1;
    if(a[0] > b[0]) return 1;
    return 0;
});

// Sort scores array by score value (ascending)
const sortedByScoreAsc = scores.slice().sort((a, b) => a[1] - b[1]);

// Sort scores array by score value (descending)
const sortedByScoreDesc = scores.slice().sort((a, b) => b[1] - a[1]);
try {
  console.log("Original scores array:");
  console.log(scores);
  console.log("\nScores sorted by subject name:");
  console.log(sortedBySubject);
  console.log("\nScores sorted by score value (ascending):");
  console.log(sortedByScoreAsc);
  console.log("\nScores sorted by score value (descending):");
  console.log(sortedByScoreDesc);
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
