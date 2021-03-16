/* OBIECTELE= sunt similare matricelor, cu exceptia faptului ca in loc sa se utilizeze indexuri pentru accesarea datelor
utilizati proprietatile*/

//EXAMPLE

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//PROPRIETATILE = sunt cele inainte de ":"


var myDog = {

    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []

};

//==============================ACCESUL LA PROPRIETATILE OBIECTELOR===============================

//1. Cu punct
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//2. Paranteza( daca avem spatiu in proprietati ar trebui sa folosim parantezele)-> []

var testObj2 = {

    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"

};

var entrreValue = testObj2["an entree"];
var drinkValue = testObj2["the drink"];

//3.Cu variabile

var testObj3 = {

    12: "Namath",
    16: "Montana",
    19: "Unitas"

};

var playerNumber = 16;
var player = testObj3[playerNumber];


//========================================Updating object Properties==================================

//Putem folosi notatia cu punct pentru actualizarea proprietatilor obiectului


var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";


//=====================================Adaugarea unei noi proprietati unui OBIECT=========================

//Putem folosi notatia cu punct sau cu paranteze

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};


ourDog.bark = "bow-wow";

//SAU

ourDog['bark'] = "woof!";


//====================================Stergerea unei proprietati a unui Obiect=============================
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;


//==================================Using Objects for Lookups==========================================

/* Obiectele pot fi considerate ca un stoc de valori cheie, cum ar fi un dictionar*/

//SWITCH TO-> OBJECT

function phoneticLookup(val) {
    var result = "";
    switch (val) {
        case "alpha":
            result = "Adams";
            break;

        case "bravo":
            result = "Boston";
            break;

        case "charlie":
            result = "Chicago";
            break;

        case "delta":
            result = "Denver";
            break;

        case "echo":
            result = "Easy";
            break;

        case "foxtrot":
            result = "Frank";
            break;
    }

    return result;
}

function phoneticLookup2(val) {
    var result = "";


    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"

    };

    result = lookup[val];

    return result;
}

console.log(phoneticLookup2("charlie"));//Chicago



//============================================Verificarea unui obiect daca are o  proprietatii===========

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObject(checkProp) {//verificam daca un obiect are sau nu o proprietate

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }


}


console.log(checkObject("gift"));//pony
console.log(checkObject("hello"));//not found


//======================================Manipularea OBIECTELOR COMPLEXE======================================

/* Un obiect JS este un mod de a stoca date flexibil, astfel incat sa puteti stoca siruri,numere, tablouri,
si chiar si alte obiecte*/

var myMusic = [//matrice numita myMusic si in interiorul matricei sunt obiectele
    {

        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }

];

//=====================================Accesarea Obiectelor imbricate========================

/* avem un obiect cu alte obiecte imbricate in interior*/

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContent = myStorage.car.inside["glove box"];//myStorage.car.inside["glove box"]

console.log(gloveBoxContent);


//====================================Accesarea matricelor(array) imbricate========================

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]//al doilea copac pine


//=============================Colectie de inregistrari================================

var collection = {

    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]

    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

//Keep a copy of the collection for test

var colectionCopy = JSON.parse(JSON.stringify(collection));//modalitate de copiere a obiectului

function updateRecords(id, prop, value) {

    if (value === "") {//prima conditie pe care o vom testa este daca trebuie sa stergem proprietatea
        delete collection[id][prop];

    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];// deci daca exista deja vom stabili sa fie egala cu ea insasi, dar daca nu exista o vom seta cu empty array
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));//la ultimul s-a adaugat o noua proprietate artist:"ABBA"
console.log(updateRecords(2468, "tracks", "test"));