var coin=[];
for(var i=0;i<100;i=i+1){
	coin.push(Math.floor(Math.random()*10));
}
console.log(coin);
var buttons = coin.map(c=>{
	var button = document.createElement('button');
	button.innerText = 'button 一一一一一一 '+c;
	button.addEventListener('click', ()=>{
		console.log(c);
	})
	return button;
});

buttons.forEach(b=>document.body.appendChild(b));

