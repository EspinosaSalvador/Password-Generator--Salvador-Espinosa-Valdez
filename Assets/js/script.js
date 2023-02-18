// Assignment code here
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var symbol = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "//",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(lowerCase);
console.log(upperCase);
console.log(symbol);
console.log(number);

function generatePassword() {
  var length = 0;

  // ! prompt user for length until a valid input is received
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt(
      "Enter password length this should be between 8 and 128 characters"
    );
    if (length === null) {
      // ! if user clicks "cancel", this should exit the function
      return "";
    }
    length = parseInt(length);

    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a number between 8 and 128");
      length = 0;
    }
  }

  var includeLowerCase = confirm("Would you like lower case in your password?");
  var includeUpperCase = confirm("Would you like upper case in your password?");
  var includeSymbol = confirm("Would you like symbols in your password?");
  var includeNumber = confirm("Would you like numbers in your password?");

  var selectedCharsPassword = [];
  if (includeLowerCase) {
    selectedCharsPassword = selectedCharsPassword.concat(lowerCase);
  }
  if (includeUpperCase) {
    selectedCharsPassword = selectedCharsPassword.concat(upperCase);
  }
  if (includeSymbol) {
    selectedCharsPassword = selectedCharsPassword.concat(symbol);
  }
  if (includeNumber) {
    selectedCharsPassword = selectedCharsPassword.concat(number);
  }
  var password = [];
  for (var i = 0; i < length; i++) {
    var randomCharIndex = Math.floor(
      Math.random() * selectedCharsPassword.length
    );
    password.push(selectedCharsPassword[randomCharIndex]);
  }

  return password.join("");
}

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
