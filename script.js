// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
// need an array of potential chars, here's all the arrays. 
var possibleChars=[]; 
var special = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p", "q", "r", "s", "t", "u", "v","w","x","y","z"];

// var lettString = letters.join("");
// var upperLetters = (lettString.toUpperCase()).split("");
// which turned into ...

var upperLetters = (((letters.join("")).toUpperCase()).split(""));


// TODO: pw length (8-128) store pw length in a variable
var pwLength = prompt("How long would you like your Password? (accepts 8-128 for length)");
  // confirm if user wants numbers
  if (8<=pwLength<=128) {
    while (i = 0; i <=pwLength; i++) {
      // make this a while loop with randomized pull from array, not for loop
    }
  } 

  
// confirm if user wants special chars

let specialChars = confirm("Would you like to include special chars?");
  // includesSpecialCharacter
  if (specialChars == true) {
    possibleChars.push(...special);
    console.log(possibleChars);
  }

  // confirm if user wants number chars
let numberChars = confirm("How about Numbers?");
  if (numberChars == true) {
    possibleChars.push(...numbers);
    console.log(possibleChars);
  }

// confirm user desire for lowercase
  let lcChars = confirm("Include Lower case english alphabet?");
    if (lcChars == true) {
      possibleChars.push(...letters);
      console.log(possibleChars);
    }

// TODO:confirm upper case 
let ucChars = confirm("Include uper case english alphabet?");
    if (ucChars == true) {
        // TODO:store in includeUpper
        possibleChars.push(...upperLetters);
        console.log(possibleChars);
    }

      // TODO:5 vars so far to store STORE via push into possiblechars at top of code, do at confirm each step?

    // TODO:also look at spread operator [...special, ...upper], so also will need arrays of special chars, numbers, etc

// TODO:look at var specialChars = "!@*%&^#(".split   split is way to moderate a string by splitting it into an array, then .join can put them back together

//TODO: when poss char array complete, build new password
  //TODO: generate arrays, pick random from possible, add it to string var passwordStr="", then return passwordStr
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
