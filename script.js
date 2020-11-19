// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character prompts
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
  console.log()
}




// Write password to the #password input
function writePassword() {
  enterNumberChar = parseInt(prompt("How many characters would you like your password to have? Chose between 8 to 128"));

  lowercase = confirm("Would you like lowercase letters?")

  uppercase = confirm("Would you like uppercase letters?")

  number = confirm("Would you like numbers?")

  specialChar = confirm("Would you like special character?")
  

  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
