// var questionsArray = [];
// var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion'];
//
// function Question(name, path) {
//   this.name = name;
//   this.path = path;
//   questionsArray.push(this);
// }
//
if (localStorage.getItem('userAccount') === null) {
  console.log('userAccount array created.');
  var userAccountArray = [];
  localStorage.setItem('userAccount', JSON.stringify(userAccountArray));
} else {
  var userAccountArray = JSON.parse(localStorage.getItem('userAccount'));
  console.log('userAccount obtained from localStorage.');
}

var formEl = document.getElementById('form');

function UserAccount(userName, passWord) {
  this.userName = userName;
  this.passWord = passWord;
  this.questionsAsked = 0;
  this.questionsWrong = 0;
  userAccountArray.push(this);
  console.log('New user created! UserAccount object constructor was used.');
}

var accountFunctions = {
  activeUser : null,
  findUser : function(userName, passWord) {
    for (users in userAccountArray) {
      if (userName === userAccountArray[users].userName) {
        for (users in userAccountArray) {
          if (passWord === userAccountArray[users].passWord) {
            console.log('innerLoop');
            accountFunctions.activeUser = userAccountArray[users];
            //Push activeUser to localStorage
            localStorage.setItem('activeUser', JSON.stringify(accountFunctions.activeUser));
            console.log('findUser method found the user account');
          }
        }
      }
    }
  },

  newUser : function(obj, userName, passWord) {
    if (obj === null) {
      accountFunctions.activeUser = new UserAccount(userName, passWord);
      //Push activeUser to local storage
      localStorage.setItem('activeUser', JSON.stringify(accountFunctions.activeUser));
      console.log('newUser method used to create a new user account');
      console.log(accountFunctions.activeUser);
      localStorage.setItem('userAccount', JSON.stringify(userAccountArray));
    }
  },

  indexOnSubmit : function() {
    event.preventDefault();
    var userNameInput = event.target.name.value;
    var passWordInput = event.target.password.value;
    accountFunctions.findUser(userNameInput, passWordInput);
    accountFunctions.newUser(accountFunctions.activeUser, userNameInput, passWordInput);
    accountFunctions.loadGamePage();
  },

  loadGamePage : function() {
    window.location = 'game_page/game_page.html';
    // Get active user from local storage.  May want to move some function to occur on page load for game page.
    accountFunctions.activeUser = JSON.parse(localStorage.getItem('activeUser')); // Not sure this call is needed
    console.log(accountFunctions.activeUser);
  }
};

if (formEl) {
  formEl.addEventListener('submit', accountFunctions.indexOnSubmit);
};
