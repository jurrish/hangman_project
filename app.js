
var formEl = document.getElementById('form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var userName = event.target.submit.value;
  console.log('username = ' + userName);
});
