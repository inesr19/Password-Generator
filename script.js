// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z",];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z",];
var char = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Generate password with the following prompt and confirms.
function generatePassword() {
  var options = [];
  var generatedPassword = "";
  var length = parseInt(prompt("How many characters would you like your password to have? Chose between 8 to 128"));

  if (length < 8 || length > 128) {
  return alert("Your password length must be between 8 to 128 characters. Please input a new value.");
  }

// If the user wants lowercase letters.
var lowercase = confirm("Would you like lowercase letters?")
if (lowercase === true) {
  options = options.concat(alphaLower);
  console.log("includes lowercase letters.");
}

// If the user wants uppercase letters.
var uppercase = confirm("Would you like uppercase letters?")
if (uppercase === true) {
  options = options.concat(alphaUpper);
  console.log("includes uppercase letters.");
}

// If the user wants numbers.
var number = confirm("Would you like numbers?")
if (number === true) {
  options = options.concat(num);
  console.log("includes numbers.");
}

// If the user wants special characters.
var specialChar = confirm("Would you like special character?")
if (specialChar === true) {
  options = options.concat(char)
  console.log("includes special characters.");
}

// Generating random password from the selected characters and desired length of characters.
for (var i = 0; i < length; i++) {
  var random = Math.floor(Math.random() * options.length)
  generatedPassword = generatedPassword + (options[random]);
  }
return generatedPassword;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);     




