// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var characters = "";
  var password = "";
  var chartype = "";

  var length = prompt("How many characters do you want in your password? Choose between 8 to 128.");

  // if valid length was input in length prompt
  if (length >= 8 && length <= 128) {
    if (confirm("Include lowercase characters?")) {
      characters = characters + "abcdefghijklmnopqrstuvwxyz";
      chartype = chartype + "*lowercase ";
    }
    if (confirm("Include uppercase characters?")) {
      characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      chartype = chartype + "*uppercase ";
    }
    if (confirm("Include numbers?")) {
      characters = characters + "0123456789";
      chartype = chartype + "*numbers ";
    }
    if (confirm("Include special characters?")) {
      characters = characters + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      chartype = chartype + "*special characters";
    }
    // if a character type was selected, it will not be an empty string
    if (chartype != "") {
      alert("The password will be " + length + " characters long and includes: " + chartype)
      for (let i = 0; i < length; i++) {
        // get random index number and use it to get rnadom character from the characters string
        let randomchar = Math.floor(Math.random() * characters.length);
        password = password + characters[randomchar];
      }
      return password;
    }
    // if no character type was selected
    else {
      alert("Please select at least one character type.")
      return "Error - No character type selected"
    }
  }
  // if cancel was selected during length prompt
  else if (length == null) {
    alert("Generator cancelled.")
    return "Error - Generator cancelled"
  }
  // if other than 8 to 128 was entered in length prompt
  else {
    alert("Invalid password length.")
    return "Error - Invalid password length"
  }

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
