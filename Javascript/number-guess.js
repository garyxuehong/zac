
function game() {
	alert('Hello, welcome to my guess game');
	var randomNumber = Math.random();
	var bigger = randomNumber * 100;
	var coin = Math.floor(bigger);
	
	while(true) {
	
		var guess = prompt('Guess my number');
	
		if(guess == coin){
			alert('HOORAY!!!');
			break;
		}
		else if (guess>coin) {
			alert('Too large');
		} else if (guess<coin) {
			alert('Too small');
		}
	
	}

}

game();