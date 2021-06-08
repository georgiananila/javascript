var ourArray = [];


for (var i = 0; i < 5; i++) {
    ourArray.push(i);

}//completeaza o matrice cu numerele de la 0-4

var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}//completeaza matricea cu nr de la 1-5


//===============================Iterate Odd Number with a FOR loop===================

var ourArray2 = [];

for (var i = 0; i < 10; i += 2) {
    ourArray2.push(i);
}

console.log(ourArray2);//[0,2,4,6,8]-nr pare

//-----------------------------------------

var myArray2 = [];

for (var i = 1; i < 10; i += 2) {
    myArray2.push(i);
}

console.log(myArray2);//[1,3,5,7,9]-nr impare


//==================================Count Backwards=============================

//poate numara inapoi

var ourArray3 = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray3.push(i);
}

console.log(ourArray3);//[10,8,6,4,2]-nr pare in ordine inversa


//===============================Iterate Through an ARRAY=====================

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);//SUMA ELEMENTELOR DIN ARRAY


//===========================IMBRICARI=================================

//->MATRICE MULTIDIMENSIONALA SAU IMBRICATA

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }

    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);//5040
