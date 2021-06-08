//operatorul ternar= o expresie one-line if-else 
//condition ? statement-if-true:statement-if-false
function checkEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return falsel
    }
}

checkEqual(1, 2);

//iar acum cu operator ternar 

function checkEqual(a, b) {
    return a === b ? true : false;
}

checkEqual(1, 2);


//-----------------------------MULTIPLE CONDITIONAL(TERNARY) OPERATORS-----------

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));//positive

