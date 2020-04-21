function star(){

	var aaa = document.getElementById('imgStar');
	aaa.src = 'star.jpg';
}


function game(max) {
	alert('Hello, welcome to my guess game');
	var randomNumber = Math.random();
	var bigger = randomNumber * 100;
	var coin = Math.floor(bigger);
	var count=0;
	
	while(true) {
		if(count>max){ alert('LOSE, game over');break;	}
		var guess = prompt('Guess my number');
		count=count+1;
	
		if(guess == coin){
			star();
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

var max = prompt('How many times in max can be allowed?');

game(max);









