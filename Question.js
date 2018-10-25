"use strict";

var action;
var numberFirst;
var numberSecond;

action = prompt('What action do you whant the programm to complete? Write ADD, SUBTRACT, DIVIDE, MULTIPLY', '');

if (action == 'add') {
	numberFirst = prompt('Enter first number', '');
	numberSecond = prompt('Enter second number', '');
	alert('The result is ' + (+numberFirst + +numberSecond));
}	else if (action == 'subtract') {
	numberFirst = prompt('Enter first number', '');
	numberSecond = prompt('Enter second number', '');
	alert('The result is ' + (numberFirst - numberSecond));
}	else if (action == 'multiply') {
	numberFirst = prompt('Enter first number', '');
	numberSecond = prompt('Enter second number', '');
	alert('The result is ' + (numberFirst * numberSecond));
}	else if (action == 'divide') {
	numberFirst = prompt('Enter first number', '');
	numberSecond = prompt('Enter second number', '');
	alert('The result is ' + (numberFirst / numberSecond));
}   else {
	alert('You cancel the Question or have got a mistake');
}
	





