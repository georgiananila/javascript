/* vom avea o functie de numarare a cardurilor de blackjack.
cand ai o carte mica count-ul va creste iar cand ai o carte mare el va scadea si va merge jos, iar daca cartea are valoare medie, numarul (count-ul)ramane acelasi.
cand numarul este pozitiv, jucatorul trebuie sa parieze, si atunci cand numarul este zero sau negativ, jucatorul trebuie sa parieze scazut(sa nu parieze)*/


var count = 0;
function cc(card) {

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = "Hold";
    if (count > 0) {
        holdbet = 'Bet';
    }



    return count + " " + holdbet;
}

//--ex1
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));//bet

//--ex2
cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));//HOLD