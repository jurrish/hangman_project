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

  appendingImage: function() {
    this.elObj.src = questionsArray[0].path;
  }
};
questionObject.appendingImage();

//canvas

window.onload = function(){
  var canvas = document.getElementById('canvasHangman'),
      context = canvas.getContext('2d');
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'white';
context.fillRect(200, 50, 50, 50);

/*  context.fillStyle = 'red';
  context.fillRect(20, 20, 50, 50);

  context.strokeStyle = 'white';
  context.lineWidth = 4.4;
  context.strokeRect(10, 370, 380, 0);

  context.strokeStyle = 'white';
  context.lineWidth = 4;
  context.strokeRect(300, 170, 0, 200);*/

};
