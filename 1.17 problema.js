/* Avem aceasta serie de obiecte in listele noastre,vrem sa cream aceasta functie de profil de cautare unde trecem
numele si proprietatea(prop) va returna valoarea acelei proprietati, daca nu corespund nici unui context, atunci fuunctiile
noastre*/


var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {

        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }

];

function lookUpProfile(name, prop) {

    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"//un mod frumos de a pune o alta conditie (cea de existenta a proprietatii )asupra contacts[i][prop] (a ceea ce deja returnam )
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data);