//1.Metoda clasica

function convertToInteger(str) {

    return parseInt(str);

}

convertToInteger("56");

//2.Radix

function convertToInteger2(str) {

    return parseInt(str, 2);

}

convertToInteger2("10011");//numar binar

//baza 10-> cea implicita
//baza 2-> binar
