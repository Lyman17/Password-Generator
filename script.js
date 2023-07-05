// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on user criteria
function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);

  // Validate the input length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input! Password length should be between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type for the password!");
    return "";
  }

  // Define character sets based on user criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Create the character set based on selected criteria
  var characterSet = "";
  if (includeLowercase) {
    characterSet += lowercaseChars;
  }
  if (includeUppercase) {
    characterSet += uppercaseChars;
  }
  if (includeNumeric) {
    characterSet += numericChars;
  }
  if (includeSpecial) {
    characterSet += specialChars;
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}
