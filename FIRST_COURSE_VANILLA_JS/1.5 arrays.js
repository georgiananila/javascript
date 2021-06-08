//Matricele= va permit stocarea mai multor date intr-un singur loc 

var ourArray = ["John", 23];

var myArray = [];

//array in array

var ourArray2 = [["the universe", 42], ["everything", 101010]];//matrice multidimensionala

//accesul la datele din array cu indecsi

var ourArray3 = [50, 60, 70];
var ourData = ourArray3[0];//=50

//Modificarea datelor din array cu indecsi

var ourArray4 = [18, 64, 99];
ourArray4[1] = 45;//acum array-ul nostru ourArray4=[18,45,99]

//acces multi-dimensional la array cu indecsi

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];//ultimul element este 3d

var myData = myArray[2][1];//=8 

//manipularea array-urilor cu PUSH()

//-->putem adauga date la sfarsitul sirului unui tablou cu functia push()

var ourArray5 = ["Stimpson", "J", "cat"];
ourArray5.push(["happy", "joy"]);//practic va fi un alt element in matricea de mai sus

console.log(ourArray5)//ourArray5=["Stimpson","J","cat",["happy","joy"]]


//manipularea array-urilor cu POP()

//pop()= extrage ultimul element

var ourArray6 = [1, 2, 3];
var removedFromOurArray = ourArray6.pop();
console.log(ourArray6)//now ourArray6=[1,2];

var myArray1 = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray1.pop();

console.log(myArray1)// myArray1=[["John",23]]


//manipularea array-urilor cu SHIFT()

//-> functia shift este foarte similara cu functia pop, cu exceptia faptului ca elimina primul element al matricei in locul elementului final

var ourArray7 = ["Stimpson", "J", ["cat"]];
var removedFromOurArray7 = ourArray7.shift();

console.log(ourArray7)//now ourArray7=["J",["cat"]];

var myArray2 = [["John", 23], ["dog", 3]];
var removedFromMyArray2 = myArray2.shift();

console.log(myArray2)// myArray2=[["dog",3]]


//manipularea array-urilor cu UNSHIFT()

//-> functia unshift este similara cu functia push array in timp ce push adauga un element la sfarsitul matricei, unshift adauga un element la inceput
var ourArray8 = ["Stimpson", "J", "cat"];
var removedFromOurArray8 = ourArray8.shift();
console.log(ourArray8)//now ourArray8=["J","cat"];
ourArray8.unshift("Happy");
console.log(ourArray8)//now ourArray8=["Happy","J","cat"];


//shopping list

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];//matrice imbricate