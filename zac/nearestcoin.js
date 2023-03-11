var coins = [
	{ name: 'A',  distance: 100 },
	{ name: 'B',  distance: 110 }
,	{ name: 'C',  distance: 90 },
	{ name: 'D',  distance: 70 },
	{ name: 'E',  distance: 130 },
	{ name: 'F',  distance: 200 },
	{ name: 'G',  distance: 10 },
];

console.log('hello this is to find the nearest coin out from ', coins);

//----------------------------
var coinIdx = 0;

var nearestDistance = 9999;
var nearestCoin = null;


while(true) {

	if(coinIdx >= coins.length) {
		//it means all finish, you have loop through all the coins
		break; //computer will break out of the while loop
	}

	var c = coins[coinIdx];
	//find the nearet coin and put it into nearestCoin

	if (c.distance > nearestDistance) {
		//do nothing
	}
	else{
		nearestCoin = c;
		nearestDistance = nearestCoin.distance;
	}
	//next one
	coinIdx++;

}
//----------------------------

console.log('The nearest coin is ', nearestCoin);

