
var readLineSynch = require('readline-sync')

var score = 0;
var highScores =
  [
    {
      name: 'Fiona',
      score: 10

    }
  ]

var questionOne = {
  question: "What is the first book in the Bible?",
  answer: "Genesis"
}

var questionTwo = {
  question: "How many days did God take to create the world?",
  answer: "6"
}
var questionThree = {
  question: "Who did God tell to build an ark?",
  answer: "Noah"
}
var questionFour = {
  question: "How many plagues did God send on Egypt?",
  answer: "10"
}
var questionFive = {
  question: "Who was the first king of Israel?",
  answer: "Saul"
}
var questionSix = {
  question: "Who was Saul’s son that David befriended?",
  answer: "Jonathan"
}
var questionSeven = {
  question: "Which book did David write most of?",
  answer: "Psalms"
}
var questionEight = {
  question: "What was the giant’s name that David killed?",
  answer: "Goliath"
}
var questionNine = {
  question: "True or False: John the Baptist wore clothes made of goat hair.",
  answer: "False"
}
var questionTen = {
  question: "What was the name of Abraham's nephew?",
  answer: "Lot"
}
function EvaluateQuiz({ question, answer }) {
  var input = readLineSynch.question(question);
  if (input.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log('you are right')
  }
  else {
    console.log('you are wrong')
  }
}
function welcome() {
  var name = readLineSynch.question('What is your name?');
  console.log('Welcome to my Quiz', name);
}

function Quiz() {
  EvaluateQuiz(questionOne);
  EvaluateQuiz(questionTwo);
  EvaluateQuiz(questionThree);
  EvaluateQuiz(questionFour);
  EvaluateQuiz(questionFive);
  EvaluateQuiz(questionSix);
  EvaluateQuiz(questionSeven);
  EvaluateQuiz(questionEight);
  EvaluateQuiz(questionNine);
  EvaluateQuiz(questionTen);
  console.log('Your Score', score);
}

function ShowScores() {
  console.log('Leaderboard:');
  highScores.map(score => console.log('Name:', score.name, 'Score:', score.score))
}
welcome()
Quiz()
ShowScores()


















