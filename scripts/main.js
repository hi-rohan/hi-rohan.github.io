var myImage = document.querySelector('img');
var mySrc = myImage.getAttribute('src');
var myHeading = document.querySelector('h1');

var myButton = document.querySelector('button');

myButton.onclick = function(){

	var myName = prompt('First enter your name please!');
	alert('Scroll up to see the answer');

	if(mySrc=== 'images/question-mark.png'){
		myImage.setAttribute('src','images/time.png');
	}else{
		myImage.setAttribute('src','images/time.png');
	}

	myHeading.innerHTML = 'It is TIME, ' + myName + '.';
	
}
