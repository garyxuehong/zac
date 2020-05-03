var numbers=[6,9,3,1,8,2,5,7,4,10];
console.log("the number array is ", numbers);

sort();
console.log('sorted numbers are:', numbers);

function sort() {
  console.log("i am about to sort the numbers", numbers); 

  var first = 0;
  var last = numbers.length - 1;
  console.log("lastIndex in numbers", numbers[last]);

  //a-- 
  //a=a-1
  var round = 0;
  for(var a=last;a>0;a--) {
    var coin=a;
    for(var b=a-1;b>=0;b--) {
      round++;
      var numberOfCoin = numbers[coin];
      var numberOfB = numbers[b];
      if(numberOfCoin > numberOfB) {
        //do nothing <--- Comments
        /*
         * asdf-------------
        */
      } else if (numberOfCoin == numberOfB) {
        //do nothing
      } else if(numberOfCoin < numberOfB){
        numbers[coin] = numberOfB;
        numbers[b] = numberOfCoin;
      }
      console.log('-------------------------------------------');
      console.log(`this is round ${round}`);
      console.log(`I've done a round, this round a is ${a}, b is ${b}, coin is ${coin}, numberOfCoin is ${numberOfCoin}, numberOfB is ${numberOfB}`);
      console.log(`The numbers after this round is ${numbers}`);
      console.log('-------------------------------------------');
      console.log(' ');
      console.log(' ');
    }
  }


}
console.log("i am finish")
