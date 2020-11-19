// Assignment Code
var generateBtn = document.querySelector("#generate");

// Numeric characters
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z",];

// Special characters
var char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = prompt("How many characters would you like your password to have? Chose from 8 to 128 characters.")