var questionsArray = [];
var promptArray = ['What is the return value of wallOne?',
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

var responseArray = [['15', '40', '8', 'area'], ['It updates the variable el', 'It calls the function', 'It is not important', 'It writes text content into the child element'], ['<p> is a child of <div>', '<head> is a grandchild of document', '<html> is a parent of both <head> and <body>', 'all of these are correct'], ['<link>', 'css', 'index.html', 'it auto links'], ['It would not affect how the method calculates the return value', 'checkAvailability will not run properly', 'the value of Quay will still print out', 'You would have to delete the entire Object to rename it'], ['isNan', 'toFixed', 'toPrecision', 'toExponential'],
['getElementById', 'checkAvailability', 'Hotel(name, rooms, booked)', '.name'], ['a unique identifier with data attached', 'it is frequently used to change methods using jQuery', 'they do not have them in any other programming language', 'a deprecated version of control flow'], ['No one knows', '70', '14', 'Scott\'s age'], ['Math.ceil()', 'Math.floor()', 'Math.round()', 'Math.random'], ['the user will see a welcome text', 'the user will see a good morning text', 'the user will see a good evening text', 'the user will see a good afternoon text'], ['var el', 'cost', 'total', 'document']];

var correctAnswer = ['15', 'It calls the function', 'all of these are correct', 'css/', 'It would not affect how the method calculates the return value', 'toFixed', 'getElementById', 'a unique identifier with data attached', '70', 'Math.floor()', 'the user will see a good afternoon text', 'cost'];
var questionsObject = [];
var answerArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion', 'childQuestion', 'methodQuestion', 'methodQuestion2', 'multipleObjects', 'objLitQuestion', 'returnQuestion', 'roundDownQuestion'];

// function Question(name, path) {
//   this.name = name;
//   this.path = path;
//   questionsArray.push(this);
// }

// (function addingPhotos() {
//   for (var i = 0; i < questionNames.length; i++) {
//     new Question(questionNames[i], 'questions/' + questionNames[i] + '.png');
//   }
// })();

function QuesConstructor(name, path, quest, answer, allQuestions) {
  this.name = name;
  this.path = path;
  questionsArray.push(this);
  this.quest = quest;
  this.answer = answer;
  this.allQuestions = allQuestions;
  // this.canvas = canvas;
  questionsObject.push(this);
};

// function addingPhotos() {
//   for (var i = 0; i < questionNames.length; i++) {
//     new Question(questionNames[i], 'questions/' + questionNames[i] + '.png');
//   }
// };

function addingQuestions() {
  for(var i = 0; i < promptArray.length; i++) {
    new QuesConstructor(questionNames[i], 'questions/' + questionNames[i] + '.png', promptArray[i], correctAnswer[i], responseArray[i]);
  }
};
addingQuestions();

QuesConstructor.prototype.appendingImage = function() {
  var elQuesPic = document.getElementById('img');
  var elQuesParent = document.getElementById('test');
  var elQuesText = document.createElement('p');
  for(var i = 0; i < questionsArray.length; i++) {
    elQuesPic.src = questionsArray[i].path;
    console.log('image pop');
    elQuesText.textContent = 'hola fucker';
    elQuesParent.appendChild(elQuesText);
  }
};
questionsObject[0].appendingImage();

//display answers
function displayMultAnswers() {
  for (var i = 0; i < responseArray.length; i++){
    for (var j = 0; j < responseArray[i].length; j++){

      var radioTestOne = document.getElementById('testOne');
      radioTestOne.textContent = responseArray[i][j++];

      var radioTestTwo = document.getElementById('testTwo');
      radioTestTwo.textContent = responseArray[i][j++];

      var radioTestThree = document.getElementById('testThree');
      radioTestThree.textContent = responseArray[i][j++];

      var radioTestFour = document.getElementById('testFour');
      radioTestFour.textContent = responseArray[i][j];
      //console.log(responseArray[i][j]);
    }
  }
};
displayMultAnswers();
//display wrong answers in wrong anwser section
// function displayCorrectAnswers(){
//   for(var i = 0; i < correctAnswer.length; i++){
//     var rightAnswer = document.getElementById('wrongAnswer');
//     var theAnswerIs = document.createElement('p');
//     theAnswerIs.textContent = correctAnswer[i];
//     rightAnswer.appendChild(theAnswerIs);
//   }
// };
// displayCorrectAnswers();
//sync submit button to hangman and wrong anwser section

//sync 'back to questions' button back to game and clear wrong answers section

// tracker of wrong and correct answers sync to localstorage

//canvas
var canvas = document.getElementById('canvasHangman'),context = canvas.getContext('2d');
window.onload = function(){
  canvasRender.gallows();
  canvasRender.head();
  canvasRender.torso();
  canvasRender.rightLeg();
  canvasRender.leftLeg();
  canvasRender.rightArm();
  canvasRender.leftArm();
};

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
  // angle support
    // context.strokeStyle = 'white';
    // context.lineWidth = 10;
    // context.rotate(Math.PI / 4);
    // context.strokeRect(295, -155, 46, 0);
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
  }
};

var radioButtons = document.getElementsByName('answers');
var answerForm = document.getElementById('formId');
var newTest = {
  selection: null,
  selectionLabel: null,
  radioCheck: function() {
    event.preventDefault();
    for (var r = 0; r < radioButtons.length; r++) {
      if (radioButtons[r].checked) {
        selection = radioButtons[r];
        selectionLabel = selection.labels;
        console.log(selection);
        console.log(selectionLabel);
      }
    };
    if (selectionLabel[0].textContent === questionsArray[0].answer) {
      console.log('You got it right!');
      //Call some method
    } else {
      console.log('You got it wrong');
      //Call some method
    }
  },
};

answerForm.addEventListener('submit', newTest.radioCheck);
