// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
// need an array of potential chars, here's all the arrays. 
var possibleChars=[]; 
var special = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
let passwordAr = [];

var upperLetters = (((letters.join("")).toUpperCase()).split(""));
// which came from...
// var lettString = letters.join("");
// var upperLetters = (lettString.toUpperCase()).split("");



// WORK NEEDED HERE *******

// TODO: handle edge or corner cases to include false inputs.

  var userInput = prompt("Let's start with your desired Password length. Remember, I can make passwords 8-128 characters long."); 
  let pwLength = parseInt(userInput, 10);
  console.log(pwLength);
 
// WORK NEEDED HERE ****** need edge case of people not putting in numbers, or outside of pw length. could make all inside single if/else regarding pwLength *************************


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
        //store in includeUpper
          possibleChars.push(...upperLetters);
          console.log(possibleChars);
      }

  // //TODO: when poss char array complete, build new password ***************needs work
  while (passwordAr.length < pwLength) {
  let randomItem = possibleChars[Math.floor(Math.random()*possibleChars.length)];
  console.log(randomItem);
  passwordAr.push(randomItem);
  console.log(passwordAr);
  
}
  // for (passwordAr.length < !!!X!!! ) {
  //working HERE do I Parse out the int value input by user? how to be sure user input is number?
  //  array add, join to string. (storing as array doesn't create a new one every time)
  // }
  // return passwordStr;
}



  //TODO: generate arrays, pick random from possible, add it to string var passwordStr="", then return passwordStr


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
