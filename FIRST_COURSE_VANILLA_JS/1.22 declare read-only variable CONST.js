//CONST-variabile read-only
//-- are toate caracteristicile lui LET dar este numai de citire, nu putem reatribui un const

function printManyTimes(str) {
    "use strict";

    var sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for (var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}

printManyTimes("freeCodeCamp");

//aici afiseaza:  freeCodeCamp is amazing!


function printManyTimes2(str) {
    "use strict";

    const sentence = str + " is cool!";

    //sentence = str + " is amazing!";//daca o pastram da eroare

    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}

printManyTimes2("freeCodeCamp");

//aici afiseaza:  freeCodeCamp is cool!