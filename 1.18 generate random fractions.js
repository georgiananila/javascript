//modalitate simpla de a crea un numar zecimal aleatoriu in JS

function randomFraction() {

    return Math.random();
}

console.log(randomFraction());//va fi intotdeauna un numar zero, intre zero si unu , dar nu ar putea fi 1 


//GENERATE RANDOM WHOLE NUMBERS

//Math.floor-aproximeaza la cel mai apropiat numar intreg prin rotunjire catre jos

//Exemplul 1:
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);//inmultind cu 0 va afisa un numar intre 0 si 20 dar fara a include 20 practic va fi un nr intre 0 si 19

//Exemplul 2:
function randomWholeNumber() {//nr intreg intre 0 si 9

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNumber());



//GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

//->puteti genera  de asemenea nr intregi intr-un interval 