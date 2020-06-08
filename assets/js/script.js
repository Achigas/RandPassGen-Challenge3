// Assignment code here

// How many characters 8-128

var Characters = function() {
  var totalCharacters = window.prompt("How many characters would you like in the password? Please select a number between 8-128.")
//Change string to integer 
totalCharacters = parseInt(totalCharacters);
    //validate response
    if (totalCharacters >= 8 && totalCharacters <= 128) {
       window.alert("yay" + totalCharacters) }
    else {
      window.alert("Please enter a number between 8 and 128");
      Characters();
    }
  }

  Characters();

//Lowercase characters?
  //validate response
  //if True, Loop and store value(s)
  //if false, skip to next question.

//Uppercase characters?
  //validate response
  //if true, loop and store value(s)
  //if false, skip to next question. 

//Numeric Characters?

//Special characters?

//make sure one is yes, if all false, run questions again. 

// For loop with i=length of password
//loop through only characters that were answered yes.
//random functions to assign which to use

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
