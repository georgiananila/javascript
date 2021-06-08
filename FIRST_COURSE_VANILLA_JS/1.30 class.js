//=============================1. USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION===============

//MODUL VECHI DE A CREA UN OBIECT

var SpaceShuttle = function (targetPlanet) {//functie construtor
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

//VOM FOLOSII CLASS SYNTAX

class SpaceShuttle2 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);


//vom face o functie ce creaza

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }

    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//==============================2. Use getters and setters to Control Access to an Object==============

//ex1.
class Book {
    constructor(author) {
        this._author = author;
    }

    //getter
    //FUNCTIILE GETTER=sunt menite sa revina sau sa obtineti valoarea variabilei private a unui obiect catre utilizator fara ca utilizatorul sa acceseze direct variabila privata
    get writer() {
        return this._author;
    }

    //setter
    //
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }

}


//ex2.clasa termostat +getter+setter

function makeClass2() {

    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32);//->transformam in Celsius,(underscore semnifica faptul ca primiti o variabila privata)
        }

        //getter
        get temperature() {
            return this._temp;
        }

        //setter
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


//=====================3. Understand the Differences between import and require=======================

//putem exporta codul intr-un fisier si apoi il putem folosi importat in alt fisier

import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);//HELLO!

//PUTEM IMPORTAT TOT prin * = import * as capitalizeStrings from "...";