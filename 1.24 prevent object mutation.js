//object.freeze care previne mutatia datelor.

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);//99

//=======ACUM FOLOSIM OBJECT.FREEZE PENTRU CA PI SA NU SE MAI MODIFICE

function freezeObj2() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);//AM ADAUGAT

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj2();

console.log(PI);//VA RETURNA EXCEPTIA PENTRU CA NOI DORIM CA IN BLOCUL TRY-CATCH SA MODIFICAM CONSTANTA "INGHETATA"