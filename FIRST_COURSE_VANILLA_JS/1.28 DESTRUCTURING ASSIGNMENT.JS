//1.Use Destructuring Assignment to assign variables from objects

//DESTRUCTURING ASSIGNMENT=este o sintaxa speciala pentru atribuirea corecta a valorilor luate direct dintr-un obiect unei variabile


var voxel = { x: 3.6, y: 7.4, z: 6.54 }//obiect cu trei elemente
//daca vrem sa luam fiecare element individual din acest obiect acesta este modul vechi de a o face:
var x = voxel.x;//x=3.6
var y = voxel.y;//y=7.4
var z = voxel.z;//z=6.54


//acum cu destructurarea,exista un mod mai simplu si mai rapid :
const { x: a, y: b, z: c } = voxel;//a=3.5,b=7.4,c=6.54


//EXERCITIU: Acum vom folosi destructurarea pentru a obtine temperatura medie pentru maine

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    //change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures;//obtinem campul de maine din obiectul AVG_TEMPERATURES si atribuiti-o variabilei tempOfTomorrow
    //change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));//should be 79



//==============================2.DESTRUCTURING ASSIGNMENT WITH NESTED OBJECTS===========================

const LOCAL_FORECAST = {
    today1: { min: 72, max: 83 },
    tomorrow1: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow1: { max: maxOfTomorrow } } = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));//84.6


//========================3. USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS=========================

const [w, v, , p] = [1, 2, 3, 4, 5, 6];//aici sare peste elementul cu valoarea 3 
console.log(w, v, p);//afiseaza 1,2,4


let d = 8, e = 6;
(() => {
    "use strict";
    [d, e] = [e, d]


})();

console.log(d);//6
console.log(e);//8


//===============================4. DESTRUCTURING ASSIGNMENT WITH REST OPERATOR===================
//vrem sa returnam lista cu primele doua elemente lipsa
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [, , ...arr] = list;//folosim operatorul de repaus si eliminam primele doua elemente
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);//[3,4,5,6,7,8,9,10]
console.log(source);//[1,2,3,4,5,6,7,8,9,10]


//===============================5. DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS================

const stats = {
    maxim: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    minim: -0.75,
    average: 35.85
};

const half = (function () {
    return function half({ maxim, minim }) {//putem scrie doar argumentele de care avem nevoie si nu tot obiectul 
        return (maxim + minim) / 2.0;//aici putem sa ne referim direct la argumente, nu stats.maxim
    };
})();

console.log(stats);
console.log(half(stats));