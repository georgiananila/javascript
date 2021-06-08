function testNotEqual(val) {
    if (val != 12) {//aici operator de inegalitate
        return "Not equal";

    }
    return "equal";
}

console.log(testNotEqual(10));//not equal


/* operatorul egalitate strict(===)*/


function testStrinctNotEqual(val) {
    if (val !== 7) {//aici operator  de inegalitate strict
        return "Not equal";

    }
    return "equal";
}

console.log(testStrinctNotEqual(10));//not equal

//=> operatorul != poate converti doua variabile de tipuri diferite si sa spuna ca numarul 10  nu este egal cu string "99"
// DAR OPERATORUL !== NU POATE FACE ASTA

//AND este sub aceasta forma: &&
//OR este sub aceasta forma:||