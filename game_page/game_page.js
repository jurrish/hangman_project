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
