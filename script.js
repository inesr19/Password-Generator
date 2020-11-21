// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Numeric characters
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Lowercase alphabet
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z",];
// Uppercase alphabet
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z",];
// Special characters
const char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var options = [];
var generatePassword = "";


// Write password to the #password input
function writePassword() {

// Initial prompt
length = parseInt(prompt("How many characters would you like your password to have? Chose between 8 to 128"));
if (length < 8) {
  alert("Your password must be more than 8 characters.")
} else if (length > 128) {
  alert("Your password must be less than 128 characters.")
}

var random = Math.floor(Math.random() * options.length)

// If the user wants lower case letters.
alphaLower = confirm("Would you like lowercase letters?")
if (lowercase === true) {
  console.log("includes letters");
}
  
alphaUpper = confirm("Would you like uppercase letters?")
if (uppercase === true) {
  console.log("includes uppercase letters");
}

num = confirm("Would you like numbers?")
if (num === true) {
  console.log("includes numbers");
}

char = confirm("Would you like special character?")
if (char === true) {
  console.log("includes special characters.");
}
    
  var password = generatePassword();
  console.log("Password length: " + password.length);

  
  for (var i = 0; i < options.length; i++) {
    password += options[random]
    console.log(password);
  }
  console.log(password);

  var passwordText = document.querySelector("#password");
  passwordText.textContent.value = password;
    
  } 




