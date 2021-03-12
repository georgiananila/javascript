/* In informatica coada este o structura abstracta de date in care se afla articole pastrate in ordine.
Elementele noi pot fi pastrate in spatele cozii iar elementele vechi sunt scoase din fata cozii*/

function nextInLine(arr, item) {//cu aceasta functie inline puteti adauga un articol in matrice si va returna primul articol
    //Your code here
    arr.push(item);

    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));//rezultat: [1,2,3,4,5]
console.log(nextInLine(testArr, 6));//1
console.log("After: " + JSON.stringify(testArr));// rezultat:[2,3,4,5,6]

//JSON.stringify= este o modalitate de a schimba o matrice intr-un sir care sa poata sa fie usor imprimate pe ecran