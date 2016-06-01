if (localStorage.getItem('userAccount') === null) {
  var userAccountArray = [];
  localStorage.setItem('userAccount', JSON.stringify(userAccountArray));
} else {
  var userAccountArray = JSON.parse(localStorage.getItem('userAccount'));
}

var formEl = document.getElementById('form');

function UserAccount(userName, passWord) {
  this.userName = userName;
  this.passWord = passWord;
  this.questionsAsked = 0;
  this.questionsWrong = 0;
  this.questionsRight = 0;
  userAccountArray.push(this);
  accountFunctions.activeUser = this;
}

var accountFunctions = {
  activeUser : null,
  findUser : function(userName, passWord) {
    for (users in userAccountArray) {
      if (userName === userAccountArray[users].userName) {
        for (users in userAccountArray) {
          if (passWord === userAccountArray[users].passWord) {
            accountFunctions.activeUser = userAccountArray[users];
            accountFunctions.activeUser.indexNum = users;
            localStorage.setItem('activeUser', JSON.stringify(accountFunctions.activeUser));
            userAccountArray[users] = accountFunctions.activeUser;//test
          }
        }
      }
    }
  },

  newUser : function(obj, userName, passWord) {
    if (obj === null) {
      accountFunctions.activeUser = new UserAccount(userName, passWord);
      accountFunctions.findUser(accountFunctions.activeUser.userName, accountFunctions.activeUser.passWord);
      localStorage.setItem('activeUser', JSON.stringify(accountFunctions.activeUser));
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
  },

  getLocalStorage : function() {
    userAccountArray = JSON.parse(localStorage.getItem('userAccount'));
    accountFunctions.findUser(activeUser.userNameInput, activeUser.passWord);
    accountFunctions.activeUser = JSON.parse(localStorage.getItem('activeUser'));

  },
  updateLocalStorage : function() {
    var index = activeUser.indexNum;
    userAccountArray[index] = activeUser;
    localStorage.setItem('activeUser', JSON.stringify(activeUser));
    localStorage.setItem('userAccount', JSON.stringify(userAccountArray));
  }
};

if (formEl) {
  formEl.addEventListener('submit', accountFunctions.indexOnSubmit);
};
