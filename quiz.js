  //select Elements //
  const start = document.getElementById("start");
  const Quiz = document.getElementById("Quiz");
  const question = document.getElementById("question");
  const Answer = document.getElementById("Answer");
  const counter = document.getElementById("counter");
  const timeGauge = document.getElementById("timeGauge");
  const progress = document.getElementById("progress");
  const score = document.getElementById("score");

  //Questions & Answer//
let questions = [{
  question: "What does html stands for?" ,
  Answer : "Hyper Text Markup Language."
}, {
  question : "What does JS stands for? ",
  Answer : "JavaScript"
}];
start.addEventListener("click", startQuiz);

function startQuiz () {
  start.style.display = "none";
  renderQuestion();
  Quiz.style.display = "block";
  renderProgress();
  renderCounter();
}

//create some variables 
const lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;
  const questionTime = 10;
  const gaugeWidth = 130; //130 px
  const gaugeUnit = gaugeWidth / questionTime;
let TIMER ;
let Score = 0;

TIMER = setInterval(renderCounter , 1000);

//render question 
function renderQuestion(){
  let a = questions[runningQuestion];

  question.innerHTML = "<p>"+ a.question + "</p>";
}
 
  
  //render question 
  function renderProgress() {
      for ( let aIndex = 0; aIndex <= lastQuestion;
      aIndex++)  {
          progress.innerHTML += "<div class = 'prog' id = " + aIndex + "> </div>";
      }
  }
  //counter render 

  function renderCounter() {
      if (count <= questionTime) {
          counter.innerHTML = count;
          timeGauge.style.width = count * gaugeUnit + "px";
          count++ 
      } else {

        count = 0;
        //change the progress color to red 
        answerIsWrong();
      if (runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
      } else {
        //quiz end
        clearInterval(TIMER);
      }
    }
  }
  function checkAnswer (answer) {
    if (answer == questions [runningQuestion].Answer) {
      //answer is correct
      Score ++ 
      //change the progress bar to green
      answerIsWrong();
    } else {
      //answer is wrong 
      // change progress color to red
      answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    }else {
      //quiz end
      clearInterval(TIMER);
    }
  }
  //answer is correct 
  function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  }
  //answer is wrong
  function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  }