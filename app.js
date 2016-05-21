

var questionsArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion'];


function Question(name, path) {
 this.name = name;
 this.path = path;
 questionsArray.push(this);
}

//New Code is below this comment.

if (localStorage.getItem('userAccount') === null) { //This may not be neccessary to do. On page load either get or make questionsArray
  console.log("userAccount array created.");
  var userAccount = [];
  localStorage.setItem("userAccount", JSON.stringify(userAccount));
} else {
  var userAccount = JSON.parse(localStorage.getItem('userAccount'));
  console.log("userAccount obtained from localStorage.");
}

var formEl = document.getElementById('form'); //Controls the userName and passWord inputs

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
  console.log('username = ' + userName + '  ' + passWord + ' is the password.');

  //Maybe an if statement here?
for (var n = 0; n < userAccount.length; n++) {
  if (userName === userAccount[n].userName || passWord === userAccount[n].passWord) {
    var activeUser = userAccount[n];
  } else {
    var newUser = new UserAccount(userName, passWord);
    localStorage.setItem("userAccount", JSON.stringify(userAccount));
  }
}

});
