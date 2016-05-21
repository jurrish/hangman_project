
var formEl = document.getElementById('form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var userName = event.target.name.value;
  console.log('username = ' + userName);
});

// JSON.stringify(-)
// localStorage.setItem(key, value)
//
// localStorage.getItem(key)
// JSON.parse(-)
//


if (localStorage.getItem('userAccount') === null) { //This may not be neccessary to do.
  console.log("userAccount array created.");
  var userAccount = [];
  localStorage.setItem("userAccount", JSON.stringify(userAccount));
} else {
  var userAccount = JSON.parse(localStorage.getItem('userAccount'));
  console.log("userAccount obtained from localStorage.");
}


// var userAcount = [];
