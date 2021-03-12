//SWITCH

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer
}

console.log(caseInSwitch(2));


/*DEFAULT OPTION(optiunea implicita in switch statement)*/

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer
}

console.log(switchOfStuff("a"))//apple;

console.log(switchOfStuff(2))//"";//returneaza sirul gol daca nu punem o valoare defaul


//MULTIPLE IDENTICAL

function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "LOW";
            break;
        case 4:
        case 5:
        case 6:
            answer = "MID";
            break;
        case 7:
        case 8:
        case 9:
            answer = "HIGH";
            break;
    }

    return answer;
}

console.log(sequentialSizes(1));

//DACA NU EXISTA BREAK INTRE CAZURI EL VA MERGE PANA UNDE VA GASI BREAK



//TRANSFORMAREA DIN IF IN SWITCH

//CAZ 1. if

function chainToSwitch(val) {
    var answer = "";

    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";

    } else if (val === 7) {
        answer = "Ate Nine";
    }

    return answer;
}

//CAZ 2. switch

function chainToSwitch(val) {
    var answer = "";


    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    return answer;
}