//Declarare Stringuri

//Example

var firstName = "Georgiana";// se declara intre " " sau ' '
var lastName = "Nila";

//dublu citat

//var myStr = "I am a "double quotes" string inside "double quotes"";// nu este corect

//EVADARE CARACTER(IN CAZ CA AVEM CITAT IN CITAT- SAU SIR IN SIR)

var myStr = "I am a \"double quotes\" string inside \"double quotes\"";//corect
console.log(myStr);

//SAU poti incepe cu ' ' si sa continui in interiorul sirului cu " "

var myStr = 'I am a "double quotes" string inside "double quotes"';//corect
console.log(myStr);

/*CODE OUTPUT

\'  single quote
\"  double quote
\\  backslash
\n  new line
\r  carriage return(enter)
\t  tab
\b  backspace
\f  form feed

*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"


//--------------------------------Lungimea unui sir

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;


//-------------------------------Bracket Notation to find First Character in String----------

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];//notatia aceasta cu paranteze este o modalitate de a obtine un caracter la un anumit index din cadrul unui sir
console.log(firstLetterOfFirstName)//"A"


//-------------------------String Immutability----------------------------

//-->sirurile sunt imutabile ceea ce inseamna ca nu pot fi modificate odata ce au fost create

var myStr = "Jello World"

myStr[0] = "H";//GRESIT

myStr = "Hello World";//Corect


//PENTRU A AFLA ULTIMA LITERA A UNUI SIR

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];



