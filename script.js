// Assignment Code
var generateBtn = document.querySelector("#generate");

// var possibleChars=[]; need an array of potential chars 

// propt user for:
// pw length (8-128)
  // store pw length in a variable
// confirm if want special chars
  // includesSpecialCharacter
// confirm if user wants numbers
  // store in includeNumbers
// confirm lowercase
  // store in includeLower
// confirm upper case 
  // store in includeUpper
      // 5 vars so far to store at top of code

    // if character boolean is true, add it to array of possible char - investigate the concat method
    // also look at spread operator [...special, ...upper], so also will need arrays of special chars, numbers, etc

// look at var specialChars = "!@*%&^#(".split   split is way to moderate a string by splitting it into an array, then .join can put them back together
// goign to have an Array, and add conditions in based on choices 

// when poss char array complete, build new password
  // generate arrays, pick random from possible, add it to string var passwordStr="", then return passwordStr

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
