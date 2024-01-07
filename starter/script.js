// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    var passLength = prompt("Choose the character length of generated password.\nMinimum 8 characters.\nmaximum 128 characters.")
    
    var options = [
      special = {
        active: true,
        arr: specialCharacters
      },
      numeric = {
        active: true,
        arr: numericCharacters
      },
      lower = {
        active: true,
        arr: lowerCasedCharacters
      },
      upper ={
        active: true,
        arr: upperCasedCharacters
      }
    ]

    for (var i = 0; i < options.length; i++) {
      options[i].active = confirm(`Include ${options[i].type} characters in the generated password?`);
    }

    getRandom(options)

    return parseInt(passLength);
}

// Function for getting a random element from an array
function getRandom(options) {
    console.log(options)
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var passLength = getPasswordOptions();

    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
    }

// Add event listener to generate button


generateBtn.addEventListener('click', writePassword);