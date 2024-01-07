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
    var passLength = 0;
    while (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt('Choose the character length of generated password.\nMinimum 8 characters.\nmaximum 128 characters.'))
        if (passLength < 8 || passLength > 128){
            alert('Generated password needs to be at least 8 characters but no more than 128.\nPlease re-enter!')
        }
    }

    var options = [
      special = {
        type: 'special',
        active: true,
        arr: specialCharacters
      },
      numeric = {
        type: 'numeric',
        active: true,
        arr: numericCharacters
      },
      lower = {
        type: 'lowercase',
        active: true,
        arr: lowerCasedCharacters
      },
      upper = {
        type: 'uppercase',
        active: true,
        arr: upperCasedCharacters
      }
    ]

    for (var i = 0; i < options.length; i++) {
      options[i].active = confirm(`Include ${options[i].type} characters in the generated password?`);
    }
    
    generatePassword(options, passLength)
    
    return passLength;
}

// Function for getting a random element from an array
function getRandom(arr, length) {
    var mergedArray = [];
    console.log(arr)
    // for (var i = 0; i < arr.length; i++) {
    //     mergedArray.concat(arr[i])
    //     console.log(mergedArray)
    // }
}

// Function to generate password with user input
function generatePassword(options, passLength) {
    var activeArray = [];
    for (var i = 0; i < options.length; i++) {
        if (options[i].active === true) {
            activeArray.push(...options[i].arr)
        }
    }
    getRandom(activeArray, passLength)
    return 
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    getPasswordOptions()
    // var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
    }

// Add event listener to generate button


generateBtn.addEventListener('click', writePassword);