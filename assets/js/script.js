//Assignment Code 
//# of Characters
function NumofCharacters () {
  var length = window.prompt("How many characters would you like in the password? Please select a number between 8-128.")
  if (length == null) {
    return;
  }
//Change string to integer 
length = parseInt(length);
    //validate response
     if (length >= 8 && length <= 128) {
       return length }
    else  { 
      window.alert("Please enter a number between 8 and 128");
      return NumofCharacters();
    }
}

//LowerCase Characters?
function hasLower () {
  var confirmLower = window.prompt("Would you like to include lowercase characters (Yes/No)?")
  //if user cancels
  if (confirmLower == null){
    return;}
  //if user enters a response
  else if (confirmLower.toLowerCase() === "yes") {
    return true }
  else if (confirmLower.toLowerCase()=== "no") {
    return false }
  else {
    window.alert("Please enter Yes or No.")
    return hasLower(); }
  }

//Uppercase characters?
 function hasUpper () {
  var confirmUpper= window.prompt("Would you like to include uppercase characters (Yes/No)?")
  //if user cancels
    if (confirmUpper == null) {
      return;}
  //if user enters a response
    else if (confirmUpper.toLowerCase() === "yes") {
      return true }
    else if (confirmUpper.toLowerCase() === "no") {
      return false }
    else {
      window.alert("Please enter Yes or No.")
      return hasUpper(); }
    }

//Numeric Characters?
function hasNumeric () {
  var confirmNumeric = window.prompt("Would you like to include numeric characters (Yes/No)?")
  //if user cancels
    if (confirmNumeric == null) {
      return;}
    //if user enters a response
    else if (confirmNumeric.toLowerCase() === "yes") {
      return true }
    else if (confirmNumeric.toLowerCase() === "no") {
      return false }
    else {
      window.alert("Please enter Yes or No.")
      return hasNumeric(); }
    }

//Special characters?
function hasSpecial () {
  var confirmSpecial = window.prompt("Would you like to include special characters (Yes/No)?")
    //if user cancels
    if (confirmSpecial == null) {
      return;}
    //if user enters a response
    else if (confirmSpecial.toLowerCase() === "yes") {
      return true }
    else if (confirmSpecial.toLowerCase() === "no") {
      return false }
    else {
      window.alert("Please enter Yes or No.")
      return hasSpecial(); }
    }

  //obtain potential values through ascii character codes and place them in array
  var LowerCharCodes = arrayLowtoHigh(97,122)
  var UpperCharCodes = arrayLowtoHigh(65,90)
  var NumericCharCodes = arrayLowtoHigh(48,57)
  var SpecialCharCodes = arrayLowtoHigh(33,47).concat(arrayLowtoHigh(58,64)).concat(arrayLowtoHigh(91,96)).concat(arrayLowtoHigh(123,126))

  //Set up loop for arrray to write out all values 
  function arrayLowtoHigh(asciiLow,asciiHigh) {
    var arrayCharacters = []
     for (let i=asciiLow; i<=asciiHigh; i++) {
     arrayCharacters.push(i)
    }
    return arrayCharacters
    }
  
 //Generate password code 
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
        
      //loop over array randomly to get numbers associaated with eligible characters

      let finalpassword = "";
      for (let i=0; i < length; i++) {
        var codeChar = charcodes[Math.floor(Math.random() * charcodes.length)]
        finalpassword = finalpassword + String.fromCharCode(codeChar);
        }
      return finalpassword;
        }


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input, quit if null value is returned for any variable (user cancelled)
function writePassword() {
  var length = NumofCharacters();
    if (length == null) {
      return;
    }

  var lower = hasLower();
    if (lower == null) {
      return;
    }
  var upper = hasUpper();
    if (upper == null) {
      return;
    }
  var numeric = hasNumeric();
    if (numeric == null) {
      return;
    }
  var special = hasSpecial();
    if (special == null) {
      return;
    }
  var password = generatePassword(lower, upper, numeric, special, length);
  var passwordText = document.querySelector("#password")

 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
