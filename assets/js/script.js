// Assignment code here

// How many characters 8-128

  //validate response
  //if True, Loop and store value(s)
  //if false, skip to next question.

var NumofCharacters = function() {
  var length = window.prompt("How many characters would you like in the password? Please select a number between 8-128.")
//Change string to integer 
length = parseInt(length);
    //validate response
    if (length >= 8 && length <= 128) {
       return length }
    else {
      window.alert("Please enter a number between 8 and 128");
      NumofCharacters();
    }
  }

NumofCharacters();

  //END CHARACTER CALL 
//var generatePassword = function (totalCharacters) 
//Lowercase characters?

var hasLower = function() {
  var confirmLower = window.prompt("Would you like to include lowercase characters (Yes/No)?")
  if (confirmLower==="YES" || confirmLower==="Yes" || confirmLower==="yes") {
    return true }
  else if (confirmLower==="NO" || confirmLower==="No" || confirmLower==="no") {
    return false }
  else {
    window.alert("Please enter Yes or No.")
    hasLower(); }
  }

//Uppercase characters?
var hasUpper = function () {
  var confirmUpper= window.prompt("Would you like to include uppercase characters (Yes/No)?")
    if (confirmUpper==="YES" || confirmUpper==="Yes" || confirmUpper==="yes") {
      return true }
    else if (confirmUpper==="NO" || confirmUpper==="No" || confirmUpper==="no") {
      return false }
    else {
      window.alert("Please enter Yes or No.")
      hasUpper(); }
    }

//Numeric Characters?
var hasNumeric = function () {
  var confirmNumeric = window.prompt("Would you like to include numeric characters (Yes/No)?")
    if (confirmNumeric==="YES" || confirmNumeric==="Yes" || confirmNumeric==="yes") {
      return true }
    else if (confirmNumeric==="NO" || confirmNumeric==="No" || confirmNumeric==="no") {
      return false }
    else {
      window.alert("Please enter Yes or No.")
      hasNumeric(); }
    }

//Special characters?
var hasSpecial = function () {
  var confirmSpecial = window.prompt("Would you like to include special characters (Yes/No)?")
    if (confirmSpecial==="YES" || confirmSpecial==="Yes" || confirmSpecial==="yes") {
      return true }
    else if (confirmSpecial==="NO" || confirmSpecial==="No" || confirmSpecial=="no") {
      return false }
    else {
      window.alert("Please enter Yes or No.")
      hasSpecial(); }
  }

  console.log(hasLower())
  console.log(hasUpper())
  console.log(hasNumeric())
  console.log(hasSpecial())


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
generateBtn.addEventListener("click", NumofCharacters);
