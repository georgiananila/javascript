var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray);//in cazul unui simplu while aici va afisa 10,[] pentru ca nu va intra niciodata in blucla pentru ca mai intai se face verificare 


do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);//aici va afisa 11,[10]