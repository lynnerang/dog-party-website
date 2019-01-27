
var btnClick = document.getElementById('dog-name-button');


btnClick.addEventListener('click', clickButton);

  
function clickButton() {
  var dogName = document.getElementById('dog-name-input').value;
  document.querySelector('.bold').innerText = dogName;
}


/*Below is a function that I discovered could be used to solve the page refresh on button click issue, but I also resolved it by setting button type to button.*/

/*
function clickButton(event) {
  event.preventDefault();
  alert('test');
}
*/
