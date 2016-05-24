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
      centerX = 0;
      centerY = 0;
      radius = 50;

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
context.save();
context.translate(canvas.width / 2, canvas.height / 2);
context.scale(1, 2);
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.restore();

context.fillStyle = 'white';
context.fill();
context.lineWidth = 8;
context.strokeStyle = 'white';
context.stroke();


context.strokeStyle = 'white';
context.lineWidth = 10;
context.rotate(Math.PI/4);
context.strokeRect(295,-155,46,0);

};
