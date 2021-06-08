//OPERATORUL DE IMPRASTIERE(SPREAD OPERATOR)=arata ca rest operator, dar exitinde o matrice deja existenta

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr1;
(function () {
    arr2 = arr1;
    arr1[0] = "potato"
})();
console.log(arr2); //va afisa ["potato","FEB","MAR","APR","MAY"];

//====SCHIMBAM CU SPREAD OPERATOR

const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;
(function () {
    arr4 = [...arr3];
    arr3[0] = "potato"
})();
console.log(arr4); //va afisa  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];