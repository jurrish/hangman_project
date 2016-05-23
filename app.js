
var questionsArray = [];
var questionNames = ['calculate', 'callQuestion', 'htmlQuestion', 'testQuestion', 'varQuestion'];

function Question(name, path) {
  this.name = name;
  this.path = path;
  questionsArray.push(this);
}

//New Code is below this comment.

if (localStorage.getItem('userAccount') === null) { //This may not be neccessary to do. On page load either get or make questionsArray
  console.log('userAccount array created.');
  var userAccountArray = [];
  localStorage.setItem('userAccount', JSON.stringify(userAccountArray));
} else {
  var userAccountArray = JSON.parse(localStorage.getItem('userAccount'));
  console.log('userAccount obtained from localStorage.');
}                                                                                     //WORKING!!!!!!!

var formEl = document.getElementById('form'); //Controls the userName and passWord inputs

function UserAccount(userName, passWord) {
  this.userName = userName;
  this.passWord = passWord;
  this.questionsAsked = 0;
  userAccountArray.push(this);
  console.log('New user created! UserAccount object constructor was used.');          //WORKING!!!!!!!!!!!
}

var accountFunctions = {                                                            //It appears that extra objects area created and added to the array.
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
    }                                                                                    //WORKING!!!
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
    // window.location = 'game_page/game_page.html';
    // formEl.removeEventListener('submit', accountFunctions.indexOnSubmit); // Double check the format for this.
    accountFunctions.loadGamePage();
    accountFunctions.activeUser = JSON.parse(localStorage.getItem('activeUser')); // Supposed to assign value to the activeUser after page load. Does not appear to work.
    console.log(accountFunctions.activeUser);
  },

  loadGamePage : function() {
    window.location = 'game_page/game_page.html';
    // Get active user from local storage
    // formEl.removeEventListener('submit', accountFunctions.indexOnSubmit); // Double check the format for this.
  }
};

  //   if (userAccountArray.length > 0) {
  //     for (users in userAccountArray) {
  //       if ((userName === userAccountArray[users].userName && passWord) === (userAccountArray[users].passWord)) {
  //         activeUser = userAccountArray[users];
  //         break;
  //         console.log(activeUser + ' already exists and is the current user.');
  //       } else {
  //         activeUser = new UserAccount(userName, passWord);
  //         console.log(activeUser);
  //         localStorage.setItem( "userAccount", JSON.stringify(userAccountArray)); // Happening during the for loop when results don't match. Not good. Maybe something with null?
  //       }
  //     }
  //   } else {
  //     activeUser = new UserAccount(userName, passWord);
  //     console.log(activeUser);
  //     localStorage.setItem( "userAccount", JSON.stringify(userAccountArray));
  //
  //   }

// formEl.addEventListener('submit', function(event) {
//   event.preventDefault();
//   var userNameInput = event.target.name.value;
//   var passWordInput = event.target.password.value;
//   console.log('username = ' + userNameInput + '  ' + passWordInput + ' is the password.');
//   accountFunctions.findUser(userNameInput, passWordInput);
//   accountFunctions.newUser(accountFunctions.activeUser, userNameInput, passWordInput);
//   window.location = 'game_page/game_page.html';
// });
if (formEl) {
  formEl.addEventListener('submit', accountFunctions.indexOnSubmit);
};
