var questionsArray = [];
var promptArray = ['What is the return value of wallOne?', 'What\'s the importance of updateMessage(); ?', 'Which is correct about the following diagram?' ];
var responseArray = [['15', '40', '8', 'area'], ['It updates the variable el', 'It calls the function', 'It\'s not important', 'It writes text content into the child element'], ['<p> is a child of <div>', '<head> is a grandchild of document', '<head> is a parent of both <head> and <body>', 'all of these are correct'], []];
var correctAnswer = ['15', 'It calls the function', 'all of these are correct'];
var questionsObject = [];
var answerArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion', 'childQuestion', 'methodQuestion', 'methodQuestion2', 'multipleObjects', 'objLitQuestion', 'returnQuestion', 'roundDownQuestion'];

function Question(name, path) {
  this.name = name;
  this.path = path;
  questionsArray.push(this);
}

(function addingPhotos() {
  for (var i = 0; i < questionNames.length; i++) {
    new Question(questionNames[i], 'questions/' + questionNames[i] + '.png');
  }
})();

function QuesConstructor(quest, answer, allQuestions) {
  this.quest = quest;
  this.answer = answer;
  this.allQuestions = allQuestions;
  // this.canvas = canvas;
  questionsObject.push(this);
};

function addingQuestions() {
  for(var j = 0; j < promptArray.length; j++) {
    new QuesConstructor(promptArray[j], correctAnswer[j], responseArray[j]);
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
// answer.appendingImage();

//canvas

window.onload = function(){
  var canvas = document.getElementById('canvasHangman'),context = canvas.getContext('2d');

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
//torso
  context.strokeStyle = 'white';
  context.lineWidth = 8;
  context.strokeRect(221, 205, 0, 79);
//feet
//right foot
  context.strokeStyle = 'white';
  context.lineWidth = 8;
  context.strokeRect(250, 350, 20, 0);
//left footer
  context.strokeStyle = 'white';
  context.lineWidth = 8;
  context.strokeRect(170, 350, 20, 0);
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
// angle support
  context.strokeStyle = 'white';
  context.lineWidth = 10;
  context.rotate(Math.PI / 4);
  context.strokeRect(295, -155, 46, 0);

};
