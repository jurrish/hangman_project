var questionsArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion'];

function Question(name, path) {
 this.name = name;
 this.path = path;
 questionsArray.push(this);
}

(function addingPhotos() {
 for (var i = 0; i < questionNames.length; i++) {
   new Question(questionNames[i], 'game_page/questions/' + questionNames[i] + '.png');
 }
})();

var questionObject = {
 elObj : document.getElementById('question'),
 imgOne : document.createElement('img'),

 appendingImage: function() {
   var questionPic = questionObject.elObj.appendChild(questionObject.imgOne);//changed addingPhotos.elObj to this.elObj. But is that correct? AND WHY??
   this.questionPic.src = questionsArray[0].path;
 }
};
questionObject.appendingImage();
