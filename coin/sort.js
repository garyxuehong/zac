
var ar = [];

put10elementIntoAr();

sortThoseElementsInTheA();


//---------- sort ---------
function sortThoseElementsInTheAr() {
    //if ar[0] = 10
    //if ar[1] = 5
    //now, ar is [10, 5, .....]
    //what we want is : [5, 10, .....]
}




//------------------------------------------------sorting now-------------------------------------------------------------------






//--------------------- init ----------------

function put10elementIntoAr() {

    for(var i=0;i<10;i++) {
        var randomNumber = Math.random();
        var randomNumberBetweenZeroAnd100 = randomNumber * 100;
        var wholeNumberBetweenZeroAnd100 = Math.floor(randomNumberBetweenZeroAnd100);
        ar.push(wholeNumberBetweenZeroAnd100)
    }

    console.log(ar);
    console.log("bum's poo is ");
    var len = ar.length;

    console.log('length/size of ar is ' + len);
}