var questionsArray = [];
var answerArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion', 'childQuestion', 'methodQuestion', 'methodQuestion2', 'multipleObjects', 'objLitQuestion', 'returnQuestion', 'roundDownQuestion'];
var correctAnswers = ['15'];
var totalAnswers = ['15', '40', '8', 'area'];

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
  elObj: document.getElementById('img'),
  elQuestion: document.createElement('p'),
  elTest: document.getElementById('question'),
  elAnswer: document.getElementById('test'),
  elOptionTwo: document.getElementById('testTwo'),
  elOptionThree: document.getElementById('testThree'),
  elOptionFour: document.getElementById('testFour'),
  // document.getElementById('test').textContent = 'Boop' - this works, but we need it as a method(maybe even a prototype to be applied to all instances of the question object)
  appendingImage: function() {
    this.elObj.src = questionsArray[0].path;
    this.elTest.textContent = 'What is the value of wallOne?';
  },
  appendingAnswer: function() {//this doesn't work, but we need it as  method or a prototype!
    this.elAnswer.textContent = 'option1';
    this.elOptionTwo.textContent = 'option2';
    this.elOptionThree.textContent = 'option3';
    this.elOptionFour.textContent = 'option4';
  }
};

questionObject.appendingImage();
questionObject.appendingAnswer();

// var answerObject = {
//   answerOne: document.getElementById('test').label,
//
//   getRandomIndex: function() {
//     return Math.floor(Math.random() * totalAnswers.length);
//   },
//
//   displayAnswers: function() {
//     if(correctAnswers[i] === totalAnswers[i]){
//       this.displayAnswers();
//       console.log('you are correct');
//     } else {
//       console.log('you are incorrect');
//     }
//   }
//   for(var i = 0; i < totalAnswers.length; i++) {
//
//     }
// };
// answerObject.displayAnswers();
