function printto20 () {
    for (var i =1; i<21; i++){
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}
printto20();

function multof3 () {
    for (var i=100; i>0; i--) {
        if (i%3 == 0) {
            console.log(i)
        }
    }
}
multof3();

function printsequence () {
    for (var i = 4; i > -4; i -=1.5) {
        console.log(i)
    }
}
printsequence ();

function sigma () {
    var sum = 0;
    for ( var i =1; i<101; i++) {
        sum += i;
        console.log(sum)
    }
}
sigma ();

function factorialize () {
    var product = 1;
    for( var i =12; i>1; i--) {
        product *= i;
        console.log(product)
    }
}
factorialize();