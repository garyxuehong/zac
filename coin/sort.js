var a = 'Hello '
function hello(person) {
    console.log(a + person.name+' ('+'age: '+person.age+')');
}

function start() {
    var kidOne = {
        name: 'Zac',
        age: 7
    }
    var kidTwo = {
        name: 'Hamish',
        age: 4
    }
    hello(kidOne); 
    hello(kidTwo); 
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
start()
/*
> node .\sort.js

Hello Zac (age: 7)
Hello Hamish (age: 4)

*/
