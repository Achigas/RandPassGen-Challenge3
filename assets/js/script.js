// Assignment code here

// How many characters 8-128

//# of Characters
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
  //call functions
  var length = NumofCharacters()
  var lower = hasLower()
  var upper = hasUpper()
  var numeric = hasNumeric()
  var special = hasSpecial()
  
  //obtain potential values through character codes and place them in array
  var LowerCharCodes = arrayLowtoHigh(65,90)
  var UpperCharCodes = arrayLowtoHigh(97,122)
  var NumericCharCodes = arrayLowtoHigh(48,57)
  var SpecialCharCodes = arrayLowtoHigh(33,47).concat(arrayLowtoHigh(58,64)).concat(arrayLowtoHigh(91,96)).concat(arrayLowtoHigh(123,126))

  console.log(lower)
  console.log(upper)
  console.log(numeric)
  console.log(special)
  console.log(length)
 
 function generatePassword(lower, upper, numeric, special, length) {
        //check that there is at least one "yes" 
         let countChar = lower + upper + numeric + special;
            if (countChar === 0) {
            window.alert("Please choose at least one character type for a valid password.");
            return '';
            }

      //set up array of character codes
      let charcodes = []
      if (lower)
        charcodes = charcodes.concat(LowerCharCodes)
      if (upper)
        charcodes = charcodes.concat(UpperCharCodes)
      if (numeric)
        charcodes = charcodes.concat(NumericCharCodes)
      if (special)
        charcodes = charcodes.concat(SpecialCharCodes)

        console.log(charcodes)

      //loop over array randomly to get numbers associaated with eligible characters

      //let finalpassword = "";
      //for (let i=0, i < length; i++)
       // var codeChar = charcodes[Math.floor(Math.random() * charcodes.length)]
      

 }    
function arrayLowtoHigh(low,high) {
  var arrayChar = []
  for (let i=low; i<=high; i++) {
    arrayChar.push(i)
  }
  return arrayChar
}

    //If lower is true

// For loop with i=length of password
//loop through only characters that were answered yes.
//random functions to assign which to use

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(lower, upper, numeric, special, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
