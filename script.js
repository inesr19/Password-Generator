// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character object
var enterNumberChar;
var lowercase;
var uppercase;
var number;
var specialChar;

// Numeric characters
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z",];

// Special characters
char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

for (var i = 0; i < enterNumberChar; i++) {
  var characters = Math.floor(Math.random() * 128) + 1;
}




// Write password to the #password input
function writePassword(characters) {
  enterNumberChar = parseInt(prompt("How many character would you like your password to have? Chose between 8 to 128"));
  var password = generatePassword();
  var passwordText = document.getElementById("#password").placeholder = password;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
