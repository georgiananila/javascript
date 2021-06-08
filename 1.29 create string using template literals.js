//TEMPLATE LITERALS=sunt un tip special de sir care faciliteaza crearea sirurilor complexe (le faci prin backtick :`)

//ex1.
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;//aici se va pune linie nou datorita folosirii `(backtick)

console.log(greeting);

//ex2: dorim sa creeze o lista bazata pe matricea transmisa

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

makeList(result.failure)


const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//==================================WRITE CONCISE OBJECT LITERAL DECLARATIONS USING SIMPLE FIELDS==================

const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"))


//->transformare:

const createPerson2 = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male"))


//===================WRITE CONCISE DECLARATIVE FUNCTIONS============

const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);


//->transformam

const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle2.setGear(3);
console.log(bicycle2.gear);


