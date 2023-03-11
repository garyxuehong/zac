var array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
//array[1][2] --->  6
function sayArray(blah) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			
				console.log(array[i][j]); 
			
		}
  	}
}
sayArray(array);
