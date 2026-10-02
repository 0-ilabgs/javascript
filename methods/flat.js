const weeklyTasks = [
  ["Monday", ["Reply to emails", "Team meeting"]],
  ["Tuesday", ["Write report", "Client call"]],
  ["Wednesday", ["Code review", "Project planning"]],
];

// Use flat() to flatten the array to one level
const flatTasks = weeklyTasks.flat();

// Use flat(2) to flatten the array to two levels
const allTasks = weeklyTasks.flat(2);

try {
  console.log("Original nested array:");
  console.log(weeklyTasks);
  console.log("\nFlattened array (one level):");
  console.log(flatTasks);
  console.log("\nCompletely flattened array:");
  console.log(allTasks);
} catch (error) {
  console.error("Please read the instructions carefully and try again");
}
