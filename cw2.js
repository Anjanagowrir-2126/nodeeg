const studentName = "Rahul";
const correctAnswers = 4;
const wrongAnswers = 1;

function getFinalScore(name, correct, wrong) {
  return name === "Unknown" ? "Invalid Student" : (correct * 4) - (wrong * 1);
}

const result = getFinalScore(studentName, correctAnswers, wrongAnswers);

console.log("Result:", result);
console.log("Type of result:", typeof result);