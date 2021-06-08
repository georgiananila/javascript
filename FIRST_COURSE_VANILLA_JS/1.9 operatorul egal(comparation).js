/*operatorul egal (de comparatie)=returneaza true or false*/

function testEqual(val) {
    if (val == 12) {//aici operator egal
        return "Equal";

    }
    return "Not equal";
}

console.log(testEqual(10));//not equal

/* operatorul egalitate strict(===)*/


function testEqual(val) {
    if (val === 7) {//aici operator egal
        return "Equal";

    }
    return "Not equal";
}

console.log(testEqual(10));//not equal

//operatorul egal si operatorul strict egal

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not equal";
}

console.log(compareEquality(10, "10"));//IN CAZ ==  adevarat egale, IN CAZ === false

//=> operatorul == poate converti doua variabile de tipuri diferite si sa spuna ca numarul 10 egal cu string "10"
// DAR OPERATORUL === NU POATE FACE ASTA

