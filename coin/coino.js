console.log(coin);
var buttons = coin.map(c=>{
	var button = document.createElement('button');
	button.innerText = 'button ------------'+c;
	button.addEventListener('click', ()=>{
		console.log('hahaha');
	})
	return button;
});
buttons.forEach(b=>document.body.appendChild(b));