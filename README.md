## Password Generator

### Description

The function of this page is to generate a random password using different types of characters. The user clicks on the "generate password" button and then is prompted to choose their desired length of the password. The user is then met with a series of questions about what characters they would like in their password such as lowercase letters, uppercase letters, numbers, and symbols. After the user has confirmed their desired characters, a random password is generated in the textbox.

### Screenshots

![webpage screenshot](https://github.com/inesr19/Password-Generator/blob/main/assets/images/password-generator.png)

### Changes Made - Javascript Source Code

1. Added variables for upper and lowercase letters, numbers, and symbols.
2. Added another function with a generatePassword method.
3. Added empty variables for the arrays and random generated password.
4. Added the initial prompt following a "if" statement within the generatePassword() function.
5. Added confirms for all possible character options along with a corresponding "if" statement for each the confirms. (all within the generatePassword() function).
6. Added concat methods to each of the confirm "if" statements so that the different characters within each array could combine together.
7. Added a for loop and return within the generatePassword() function to generate random characters for the password.
8. Added notes to the code.

### Link

<https://inesr19.github.io/Password-Generator/>

