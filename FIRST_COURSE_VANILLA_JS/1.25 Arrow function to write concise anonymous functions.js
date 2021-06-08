//functiile anonime nu au nume

var magic = function () {
    return new Date();
};

//putem sa o transformam intr-o functie sagata astfel

const magic2 = () => new Date();


//=========================================ARROW FUNCTION WITH PARAMETERS=================================

var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//TRANSFORMAM IN ARROW FUNCTION

const myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2([1, 2], [3, 4, 5]));


//=========================WRITE HIGHER ORDER ARROW FUNCTION===============================
//->Functiile sageata functioneaza foarte bine cu functii de ordin superior(harta,filtrare)

const realNumberArray = [4, 5.6, -9.6, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);//folosim filtrarea datelor +maparea
    return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);//[16,1764,36]