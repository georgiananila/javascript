/*o declaratie IF este utilizata pentru a lua o decizii in cod*/

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}


function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }

    return "No, that was false";
}

console.log(trueOrFalse(true));//yes that was true