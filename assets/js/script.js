// Special keys and add event listener to generate button
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById("generateBtn")
generateButton.addEventListener("click", writePassword)

var password = document.getElementById("password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt("Please enter the length of password. It must be at least 8 and less than 128.");
  var numbers = confirm("At least a number have to be in your password?");
  var lowerCases = confirm("At least a lowercase have to inbe your password?");
  var upperCases = confirm("At least a uppercase have to be in your password?");
  var special = confirm("At least a special character have to be in your password?");

  // count for minimal of requirements
  var minimumCount = 8;


  // Empty minimums for requirements
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generator functions
  var functionArray = {
    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

  // Checks if the password match all requirement

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }
  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount) ; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 128);

    randomPasswordGenerated += passwordText.substring(randomNumberPicked, randomNumberPicked+1);
  }
  // verify characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  //Get the generated Password
  document.getElementById("password").value = password;

  return randomPasswordGenerated;

}

