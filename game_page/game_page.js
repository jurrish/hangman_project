var questionsArray = [];
var promptArray = [ 'What is the return value of wallOne?',
 'What\'s the importance of updateMessage(); ?',
 'Which is correct about the following diagram?',
 'What is the name of the folder that the stylesheet is saved in?',
 'What would the method return if the value of name was changed?',
 'Which method converts a number into a string, keeping a specified number of decimals?',
 'Which question refers to the html element using the built in document method?',
 'What is true about key value pairs?',
 'What does total return?',
 'which of these returns the largest integer less than or equal to a given number?',
 'If hourNow = 14, what will happen?',
 'which element id is being updated with .textContent?' ];
var responseArray = [['15', '40', '8', 'area'], ['It updates the variable el', 'It calls the function', 'It is not important', 'It writes text content into the child element'], ['<p> is a child of <div>', '<head> is a grandchild of document', '<html> is a parent of both <head> and <body>', 'all of these are correct'], ['<link>', 'css/', 'index.html', 'it auto links'], ['It would not affect how the method calculates the return value', 'checkAvailability will not run properly', 'the value of Quay will still print out', 'You would have to delete the entire Object to rename it'], ['isNan', 'toFixed', 'toPrecision', 'toExponential'],
['getElementById', 'checkAvailability', 'Hotel(name, rooms, booked)', '.name'], ['a unique identifier with data attached', 'it is frequently used to change methods using jQuery', 'they do not have them in any other programming language', 'a deprecated version of control flow'], ['No one knows', '70', '14', 'Scott\'s age'], ['Math.ceil()', 'Math.floor()', 'Math.round()', 'Math.random'], ['the user will see a welcome text', 'the user will see a good morning text', 'the user will see a good evening text', 'the user will see a good afternoon text'], ['var el', 'cost', 'total', 'document']];

var correctAnswer = ['15', 'It calls the function', 'all of these are correct', 'css/', 'It would not affect how the method calculates the return value', 'toFixed', 'getElementById', 'a unique identifier with data attached', '70', 'Math.floor()', 'the user will see a good afternoon text', 'cost'];
var questionsObject = [];
var answerArray = [];
var questionNames = ['calculate', 'callQuestion', 'childQuestion', 'htmlQuestion', 'methodQuestion', 'methodQuestion2', 'multipleObjects', 'objLitQuestion', 'returnQuestion', 'roundDownQuestion', 'testquestion', 'varQuestion'];

function QuesConstructor(name, path, quest, answer, allQuestions) {
  this.name = name;
  this.path = path;
  questionsArray.push(this);
  this.quest = quest;
  this.answer = answer;
  this.allQuestions = allQuestions;
  questionsObject.push(this);
};

function addingQuestions() {
  for(var i = 0; i < promptArray.length; i++) {
    new QuesConstructor(questionNames[i], 'questions/' + questionNames[i] + '.png', promptArray[i], correctAnswer[i], responseArray[i]);
  }
};
addingQuestions();

var canvas = document.getElementById('canvasHangman'),context = canvas.getContext('2d');

var canvasRender = {
  gallows: function(){
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = 'white';
    context.lineWidth = 8.4;
    context.strokeRect(10, 370, 380, 0);

    context.strokeStyle = 'white';
    context.lineWidth = 10;
    context.strokeRect(350, 89, 0, 280);

    context.strokeStyle = 'white';
    context.lineWidth = 10;
    context.strokeRect(200, 100, 160, 0);

    context.strokeStyle = 'white';
    context.lineWidth = 7;
    context.strokeRect(220,100,0,50);
  },

  head: function() {
    //oval head
    var centerX = 60;
    var centerY = -50;
    var radius = 50;

    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(.35, .45);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.restore();

    context.fillStyle = 'white';
    context.fill();
    context.lineWidth = 8;
    context.strokeStyle = 'white';
    context.stroke();
  //left eyes
    var eyeX = 150;
    var eyeY = -260;
    var eyeRadius = 50;

    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(.07, .09);
    context.beginPath();
    context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
    context.restore();

    context.fillStyle = 'black';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
  //right eye
    var rightEyeX = 420;
    var rightEyeY = -260;
    var rightEyeRadius = 50;

    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.scale(.07, .09);
    context.beginPath();
    context.arc(rightEyeX, rightEyeY, rightEyeRadius, 0, 2 * Math.PI, false);
    context.restore();

    context.fillStyle = 'black';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
  },

  torso: function() {
    //torso
    context.strokeStyle = 'white';
    context.lineWidth = 8;
    context.strokeRect(221, 205, 0, 79);
  },

  rightLeg: function() {
    //right leg
    var xRightLeg = canvas.width / 2.33;
    var yRightLeg = canvas.height / 1.16;
    var legRadius = 85;
    var startAngle = 1.7 * Math.PI;
    var endAngle = 0 * Math.PI;
    var counterClockwise = false;
    context.beginPath();
    context.arc(xRightLeg, yRightLeg, legRadius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 8;
    context.strokeStyle = 'white';
    context.stroke();
    //right foot
    context.strokeStyle = 'white';
    context.lineWidth = 8;
    context.strokeRect(250, 350, 20, 0);
  },

  leftLeg: function() {
    //legs left leg
    var xleftLeg = canvas.width / 1.48;
    var yleftLeg = canvas.height / 1.16;
    var legRadius = 85;
    var startAngle = 1 * Math.PI;
    var endAngle = 1.3 * Math.PI;
    var counterClockwise = false;
    context.beginPath();
    context.arc(xleftLeg, yleftLeg, legRadius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 8;
    context.strokeStyle = 'white';
    context.stroke();
    //left footer
    context.strokeStyle = 'white';
    context.lineWidth = 8;
    context.strokeRect(170, 350, 20, 0);
  },
  rightArm: function() {
    //right arm
    var xRightArm = canvas.width / 2.31;
    var yRightArm = canvas.height / 1.4;
    var armRadius = 85;
    var startArmAngle = 1.7 * Math.PI;
    var endArmAngle =  -.1 * Math.PI;
    var counterArmClockwise = false;
    context.beginPath();
    context.arc(xRightArm, yRightArm, armRadius, startArmAngle, endArmAngle, counterArmClockwise);
    context.lineWidth = 8;
    context.strokeStyle = 'white';
    context.stroke();
  },
  leftArm: function() {
    //left arm
    var xLeftArm = canvas.width / 1.49;
    var yLeftArm = canvas.height / 1.4;
    var armLeftRadius = 85;
    var startLeftArmAngle = 1.1 * Math.PI;
    var endLeftArmAngle =  1.3 * Math.PI;
    var counterLeftArmClockwise = false;
    context.beginPath();
    context.arc(xLeftArm, yLeftArm, armLeftRadius, startLeftArmAngle, endLeftArmAngle, counterLeftArmClockwise);
    context.lineWidth = 8;
    context.strokeStyle = 'white';
    context.stroke();
  },
  gameOver: function(){
    //red fill
    context.fillStyle = 'red';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
};

function displayCorrectAnswers(){
  var rightAnswer = document.getElementById('wrongAnswer');
  var theAnswerIs = document.getElementById('correctDisplay');
  theAnswerIs.textContent = correctAnswer[activeUser.questionsAsked];
  rightAnswer.appendChild(theAnswerIs);
};

var radioButtons = document.getElementsByName('answers');
var answerForm = document.getElementById('formId');
var ansEl = document.getElementById('answer');
var ansPTag = document.createElement('p');

var newTest = {

  submitButton: document.getElementById('submit'),
  won: false,
  lost: false,
  selection: null,
  selectionLabel: null,

  appendingImage : function() {
    if (activeUser.questionsAsked === 12) {
      ansEl.appendChild(ansPTag).textContent = 'Good Job!';
      newTest.won = true;
      return;
    }
    if (activeUser.questionsWrong === 6) {
      ansEl.appendChild(ansPTag).textContent = 'Game Over';
      newTest.lost = true;
      return;
    }
    var elQuesPic = document.getElementById('img');
    var elQuesParent = document.getElementById('test');
    var elQuesText = document.getElementById('question');
    elQuesPic.src = questionsArray[activeUser.questionsAsked].path;
    elQuesText.textContent = promptArray[activeUser.questionsAsked];
    elQuesParent.appendChild(elQuesText);
  },

  displayMultAnswers: function() {
    var j = 0;
    var radioTestOne = document.getElementById('testOne');
    radioTestOne.textContent = responseArray[activeUser.questionsAsked][j++];

    var radioTestTwo = document.getElementById('testTwo');
    radioTestTwo.textContent = responseArray[activeUser.questionsAsked][j++];

    var radioTestThree = document.getElementById('testThree');
    radioTestThree.textContent = responseArray[activeUser.questionsAsked][j++];

    var radioTestFour = document.getElementById('testFour');
    radioTestFour.textContent = responseArray[activeUser.questionsAsked][j];
  },

  wrongCounter: function() {

    if(activeUser.questionsWrong >= 1){
      canvasRender.head();
    }
    if(activeUser.questionsWrong >= 2){
      canvasRender.torso();
    }
    if(activeUser.questionsWrong >= 3){
      canvasRender.rightLeg();
    }
    if(activeUser.questionsWrong >= 4){
      canvasRender.leftLeg();
    }
    if(activeUser.questionsWrong >= 5){
      canvasRender.rightArm();
    }
    if(activeUser.questionsWrong === 6){
      canvasRender.leftArm();
    }
  },

  nextQuestion : function() {
    activeUser.questionsAsked += 1;
    newTest.displayMultAnswers();
    newTest.appendingImage();
    accountFunctions.updateLocalStorage();
    accountFunctions.getLocalStorage();
  },

  radioCheck: function() {
    event.preventDefault();
    for (var r = 0; r < radioButtons.length; r++) {
      if (radioButtons[r].checked) {
        selection = radioButtons[r];
        selectionLabel = selection.labels;
        radioButtons[r].checked = false;
      }
    };
    if (selectionLabel[0].textContent === questionsArray[activeUser.questionsAsked].answer) {
      activeUser.questionsRight += 1;
      newTest.nextQuestion();
    } else {
      activeUser.questionsWrong += 1;
      newTest.wrongCounter();
      displayCorrectAnswers();
      newTest.nextQuestion();
    }
  },

  winLoseCheck: function() {
    if (newTest.lost === true) {
      submitButton.hidden = true;
    }
    if (newTest.won === true) {
      submitButton.hidden = true;
    }
  },

};

window.onload = function(){
  activeUser = JSON.parse(localStorage.getItem('activeUser'));
  accountFunctions.getLocalStorage();
  newTest.submitButton.hidden = false;
  newTest.displayMultAnswers();
  newTest.appendingImage();
  canvasRender.gallows();
  newTest.wrongCounter();
};

answerForm.addEventListener('submit', newTest.radioCheck);
answerForm.addEventListener('submit', newTest.winLoseCheck);
