// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
// need an array of potential chars, here's all the arrays. 
  let possibleChars=[]; 
  let special = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o","p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
  let passwordAr = [];
  let upperLetters = (((letters.join("")).toUpperCase()).split(""));

  // Handle edge cases to exclude false inputs.
  let pwLength = 0;
  while (pwLength < 8 || pwLength > 128) {
  let userInput = prompt("Let's start with your desired Password length. Remember, I can make passwords 8-128 characters long.");
  pwLength = parseInt(userInput, 10);
  }
  // confirm if user wants special chars  
  let specialChars = confirm("Would you like to include special chars?");
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
          possibleChars.push(...upperLetters);
          console.log(possibleChars);
      }
  
  // }  what if they pick ZERO options
  if (!specialChars && !numberChars && !lcChars && !ucChars) {
    return ("I can't do that, Dave. Please include some characters, I need wood to build a fire.")
  }

  else {

  // run this until the password is the chosen length
  while (passwordAr.length < pwLength) {
  let randomItem = possibleChars[Math.floor(Math.random()*possibleChars.length)];
  passwordAr.push(randomItem);
  }
  return passwordAr.join("");
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
