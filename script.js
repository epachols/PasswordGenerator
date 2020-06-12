// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
// need an array of potential chars, here's all the arrays. 
var possibleChars=[]; 
var special = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p", "q", "r", "s", "t", "u", "v","w","x","y","z"];

var upperLetters = (((letters.join("")).toUpperCase()).split(""));
// var lettString = letters.join("");
// var upperLetters = (lettString.toUpperCase()).split("");
// which turned into ...


// WORK NEEDED HERE *******************************************888888888888888

// TODO: LOOP THE EDGE CASE to include false inputs  pw length (8-128) store pw length in a variable
let acceptLength = ((pwLength >= 8) && (pwLength <=128));
do {
  var pwLength = prompt("How long would you like your Password? (accepts 8-128 for length)"); 
}
while (condition);
//   // let pwLength = prompt ("No really, I need a numerical password length between 8-128 to go anywhere");
//   // code block to be executed

// WORK NEEDED HERE *******************************************8888888888888888

// confirm if user wants special chars

  let specialChars = confirm("Would you like to include special chars?");
    // includesSpecialCharacter
    if (specialChars) {
      possibleChars.push(...special);
      console.log(possibleChars);
    }

    // confirm if user wants number chars
  let numberChars = confirm("How about Numbers?");
    if (numberChars) {
      possibleChars.push(...numbers);
      console.log(possibleChars);
    }

  // confirm user desire for lowercase
    let lcChars = confirm("Include Lower case english alphabet?");
      if (lcChars) {
        possibleChars.push(...letters);
        console.log(possibleChars);
      }

  // confirm upper case 
  let ucChars = confirm("Include uper case english alphabet?");
      if (ucChars) {
          // TODO:store in includeUpper
          possibleChars.push(...upperLetters);
          console.log(possibleChars);
      }
  }

    // TODO:also look at spread operator [...special, ...upper], so also will need arrays of special chars, numbers, etc

// TODO:look at var specialChars = "!@*%&^#(".split   split is way to moderate a string by splitting it into an array, then .join can put them back together

//TODO: when poss char array complete, build new password
  //TODO: generate arrays, pick random from possible, add it to string var passwordStr="", then return passwordStr


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
