

var questionsArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion'];


function Question(name, path) {
 this.name = name;
 this.path = path;
 questionsArray.push(this);
}

//New Code is below this comment.

if (localStorage.getItem('userAccount') === null) { //This may not be neccessary to do.
  console.log("userAccount array created.");
  var userAccount = [];
  localStorage.setItem("userAccount", JSON.stringify(userAccount));
} else {
  var userAccount = JSON.parse(localStorage.getItem('userAccount'));
  console.log("userAccount obtained from localStorage.");
}

var formEl = document.getElementById('form');

function UserAccount(userName, passWord) {
  this.userName = userName;
  this.passWord = passWord;
  this.questionsAsked = 0;
  userAccount.push(this);
}

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var userName = event.target.name.value;
  var passWord = event.target.password.value;
  var newUser = new UserAccount(userName, passWord);
  console.log('username = ' + userName + '  ' + passWord + ' is the password.');
});
