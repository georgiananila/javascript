//LET- Nu permite sa declarati o variabila de doua ori pe cand VAR  permite acest lucru 

var catName = "Quincy";
let quote;

var catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meaow!";
}

catTalk();

//daca lasam asa functioneaza in schimb daca schimbam var catName in let catName ne da eroare

//COMPARE SCOPES

//->o diferenta majora intre var si let este ca atunci cand declarati o variabila cu VAR este declarat global sau local daca este declarat in
//interiorul unei functii; LET-domeniul de aplicare al lui LET este limitat la declaratia sau expresia bloc in care a fost declarata

function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

//Aici ne va afisa:   Block scope i is:  block scope
//Function scope i is:  block scope


function checkScope2() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope2();

//AICI VA AFISA:   Block scope i is:  block scope
//Function scope i is:  function scope


function checkScope3() {
    "use strict";
    //let i = "function scope";
    if (true) {
        var i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope3();

//Aici ne va afisa:   Block scope i is:  block scope
//Function scope i is:  block scope


function checkScope4() {
    "use strict";
    //let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope4();

//aici va afisa pentru prima Block scope iar pentru cea de-a doua va afisa eroare pentru ca i este definit doar in interiorul acoladelor
