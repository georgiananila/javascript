const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    //s = [2, 5, 7];//-va da eroare pentru ca s este dar pt citire
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

editInPlace();

console.log(s);//[2,5,7]-putem actualiza o matrice prin modificarea la pozitiile din matrice.