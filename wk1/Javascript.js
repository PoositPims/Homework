// Comment Your JavaScript Code   
//space//
/* style */

// Declare JavaScript Variables   
var myName;

// Storing Values with the Assignment Operator   
var a;
a = 7;

// Assigning the Value of One Variable to Another   
var a;
a = 7;
var b;
b = a;
console.log(b);

// Initializing Variables with the Assignment Operator   
var a = 9;

// Understanding Uninitialized Variables   
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a);
console.log(b);
console.log(c);

// Understanding Case Sensitivity in Variables   
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseOver);

// Add Two Numbers with JavaScript
var sum = 10 + 10;
console.log(sum);

// Subtract One Number from Another with JavaScript
var difference = 45 - 33;

// Multiply Two Numbers with JavaScript
var product = 8 * 10;

// Divide One Number by Another with JavaScript
var quotient = 66 / 33;

// Increment a Number with JavaScript
var myVar = 87;
myVar++;
console.log(myVar);

// Decrement a Number with JavaScript
var myVar = 11;
myVar--;

// Create Decimal Numbers with JavaScript
var ourDecimal = 5.7;
var myDecimal = 5.7;

// Multiply Two Decimals with JavaScript
var product = 2.0 * 2.5;

// Divide One Decimal by Another with JavaScript
var quotient = 4.4 / 2.0;

// Finding a Remainder in JavaScript
var remainder;
remainder = 7 % 5;

// Compound Assignment With Augmented Addition
var a = 3;
var b = 17;
var c = 12;
a +=12;
b += 9;
c += 7;

// Compound Assignment With Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;
a -= 6;
b -= 15;
c -= 1;

// Compound Assignment With Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= 3;
c *= 10;

// Compound Assignment With Augmented Division
var a = 48;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;

// Declare String Variables
var myFirstName = "Jone";
var myLastName = "Cena";
console.log(`${myFirstName} ${myLastName}`);

// Quoting Strings with Single Quotes...............3
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Escape Sequences in Strings....................4
var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine' ;

// Concatenating Strings with Plus Operator
var myStr = 'This is the start.' + ' This is the end.'

// Concatenating Strings with the Plus Equals Operator
var myStr = 'This is the first sentence. ';
myStr += 'This is the second sentence.';

// Constructing Strings with Variables
var myName = "Trevor";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// Appending Variables to Strings
var someAdjective = "amazing";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// Find the Length of a String
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength);

// Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// Use Bracket Notation to Find the Last Character in a String
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

// Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

// var myStr = "Bob";
myStr[0] = "J";
console.log(myStr);

// Understand String Immutability
var myStr = "Jello World";
console.log(myStr[0]);