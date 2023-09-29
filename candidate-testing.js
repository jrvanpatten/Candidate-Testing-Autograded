const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ("Who was the first American woman in space? "); 

//TODO: Variables for Part 2
let questions =["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true","40", "Trajectory","3"];
let candidateAnswers = [];
let candidateAnswersFinal = [];

function askForName(){
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i=0; i < questions.length; i++){
  candidateResponse = input.question(questions[i])
  candidateAnswers.push(candidateResponse)
   }
console.log(candidateAnswers[0])
}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
while (candidateAnswers[0].toLowerCase == correctAnswers[0].toLowerCase){
   answersCorrect = 10;
   console.log(`Good Job! You answered, ${candidateAnswers[0]} the correct answer was  ${correctAnswers[0]}.`)
  
  }if (candidateAnswers[0].toLowerCase !== correctAnswers[0].toLowerCase){
  console.log(`Sorry, You answered, ${candidateAnswers[0]}  and the correct answer was  ${correctAnswers[0]}.`);
}answersCorrect = 0
while (candidateAnswers[1].toLowerCase == correctAnswers[1].toLowerCase){
  console.log(`Good Job! You answered, ${candidateAnswers[1]} the correct answer was  ${correctAnswers[1]}.`);
 answersCorrect = (answersCorrect+10)
 }if (candidateAnswers[1].toLowerCase !== correctAnswers[1].toLowerCase){
 console.log(`Sorry, You answered, ${candidateAnswers[1]}  and the correct answer was  ${correctAnswers[1]}.`);
}answersCorrect = (answersCorrect+0)
while (candidateAnswers[2].toLowerCase == correctAnswers[2].toLowerCase){
  console.log(`Good Job! You answered, ${candidateAnswers[2]} the correct answer was  ${correctAnswers[2]}.`);
 answersCorrect = (answersCorrect+10)
 }if (candidateAnswers[2].toLowerCase !== correctAnswers[2].toLowerCase){
 console.log(`Sorry, You answered, ${candidateAnswers[2]}  and the correct answer was  ${correctAnswers[2]}.`);
}answersCorrect = (answersCorrect+0)
while (candidateAnswers[3].toLowerCase == correctAnswers[3].toLowerCase){
  console.log(`Good Job! You answered, ${candidateAnswers[3]} the correct answer was  ${correctAnswers[3]}.`);
 answersCorrect = (answersCorrect+10)
 }if (candidateAnswers[3].toLowerCase !== correctAnswers[3].toLowerCase){
 console.log(`Sorry, You answered, ${candidateAnswers[3]}  and the correct answer was  ${correctAnswers[3]}.`);
}answersCorrect = (answersCorrect+0)
while (candidateAnswers[4].toLowerCase == correctAnswers[4].toLowerCase){
  console.log(`Good Job! You answered, ${candidateAnswers[4]} the correct answer was  ${correctAnswers[4]}.`);
 answersCorrect = (answersCorrect+10)
 }if (candidateAnswers[4].toLowerCase !== correctAnswers[4].toLowerCase){
 console.log(`Sorry, You answered, ${candidateAnswers[4]}  and the correct answer was  ${correctAnswers[4]}.`);
}answersCorrect = (answersCorrect+0)

  let grade = (answersCorrect %5)*100;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;

}
function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
/////console.log("Hello, " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};