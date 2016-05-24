var questionsArray = [];
var answerArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion', 'childQuestion', 'methodQuestion', 'methodQuestion2', 'multipleObjects', 'objLitQuestion', 'returnQuestion', 'roundDownQuestion'];
var correctAnswers = [];

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

var questionObject = {
  elObj : document.getElementById('img'),
  elQuestion: document.createElement('p'),
  elTest: document.getElementById('question'),

  appendingImage: function() {
    this.elObj.src = questionsArray[0].path;
    this.elTest.textContent = 'What is the value of wallOne?';
  }
};
questionObject.appendingImage();

//canvas

window.onload = function(){
  var canvas = document.getElementById('canvasHangman'),
      context = canvas.getContext('2d');
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

var cornerRadius = 20;
var rectX = 50;
var rectY = 50;
var rectWidth = 100;
var rectHeight = 100;

context.fillStyle = 'white';
context.fillRect(200, 50, 50, 50);
context.lineJoin = 'round';
context.lineWidth = 'cornerRadius';

// context.strokeRect(rectX+(cornerRadius/2),rectY+(cornerRadius/2)rectWidth-cornerRadius, rectHeight-cornerRadius);
// context.fillRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
  context.fillStyle = 'red';
  context.fillRect(20, 20, 50, 50);

  context.strokeStyle = 'white';
  context.lineWidth = 4.4;
  context.strokeRect(10, 370, 380, 0);

  context.strokeStyle = 'white';
  context.lineWidth = 4;
  context.strokeRect(300, 170, 0, 200);

};
