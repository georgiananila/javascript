//parsarea valorilor in functii cu argumente

//PARAMETRII=sunt variabile care actioneaza ca substituenti pentru valorile care urmeaza sa fie introdus intr-o functie atunci cand este apelata

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);//output 5

//scopul global si functiile

//DOMENIUL DE APLICARE= se refera la vizibilitatea variabilelor care sunt definite in afara unui bloc functional au un scop global
//SCOPUL GLOBAL=un scop global inseamna ca pot fi vazut peste tot in codul JS,


//daca intr-o functie punem o variabila sub forma aceasta

function fun1() {
    ooopsGlobal = 5;

}
//in teorie este vazuta doar in functie variabila DAR atunci cand  punem VAR in fata variabila devinde globala automat si va putea fi accesata de oriunde din program

//=> VAR= asa se declara o variabila globala


//Scopul local si functiile

//SCOPUL LOCAL=variabilele care sunt declarate in cadrul unei functii, precum si in parametrii functiei, au un domeniul de aplicare local, ceea ce inseamna ca sunt vizibili doar din cadrul functiei


//GLOBAL VS LOCAL

//variabila locala are prioritate fata de variabila globala

var outerWear = "T-shirt";

function myOutfit() {
    return outerWear;
}

console.log(myOutfit());//se va afisa variabila GLOBALA ADICA T-shirt

//--------------------------------------------------------------------------------------------
//daca adaugam o variabila cu acelasi nume astfel:

var outerWear = "T-shirt";

function myOutfit() {

    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());// afiseaza sweater deoarece variabila locala are prioritate
//DAR
console.log(outerWear);//va afisa T-shirt


//Return a value from a function with Return

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));//3



//Understanding undefined value returned from a function

var sum = 0;//variabila globala
function addThree() {//functia adauga 3 la variabila
    sum = sum + 3;
}


