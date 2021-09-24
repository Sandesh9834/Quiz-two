var input = require('readline-sync');
const chalk = require('chalk');

let userName = input.question("Enter your name:");

console.log("Welcome " + userName);
console.log("Take a quiz on India");
console.log("-----------------------------------------------------")

var score = 0;

function play(question, answer)
{
      var userAnswer = input.question(question);

      if(userAnswer.toUpperCase() === answer.toUpperCase())
      {
            console.log(chalk.green("Correct!"));
            score = score + 1;
      }
      else{
            console.log(chalk.red("Wrong!"));
      }

      console.log("Current score:" + score);
      console.log("-----------------------------------------------------")
}

var Score = [
  {
    name : "Sandesh",
    highScore : 5,
  },

  {
    name : "Ram",
    highScore : 4,
  },
]

var questions = [
      {
            question: "Which year did India got its Independence? ",
            answer: "1947"
      },
      {
            question: "Which national animal of India? ",
            answer: "Tiger"
      },
      {
            question: "Which national bird of India? ",
            answer: "Peacock"
      },
      {
            question: "What is capital of India? ",
            answer: "Delhi"
      },
      {
            question: "How many states are there in India? ",
            answer: "29"
      }
]

for(var i=0; i<questions.length; i++){
      var current = questions[i];
      play(current.question, current.answer);
}

console.log(chalk.bold("Your final score is: "+ score));

console.log("Following are the highest scores. Message me if you have higher to update the high-score")

for(var j = 0; j<Score.length; j++)
{
  var curr = Score[j];
  console.log(curr.name + ":" + curr.highScore)
}