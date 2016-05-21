var questionsArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion'];

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
