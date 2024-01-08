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

    return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {

    var passLength = 0;
    while (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt('Choose the character length of generated password.\nMinimum 8 characters.\nmaximum 128 characters.'));
        console.log(passLength)
        if (passLength < 8 || passLength > 128){
            alert('Generated password needs to be at least 8 characters but no more than 128.\nPlease re-enter!');
        }
    }

    var password = '';
    var activeArray = [];
	
	while (activeArray.length === 0) {
		var inputOptions = getPasswordOptions();

		if (inputOptions.find((i) => i.active === true)) {
			for (var i = 0; i < inputOptions.length; i++) {
				if (inputOptions[i].active === true) {
					activeArray.push(...inputOptions[i].arr);
				}
			}
		} else {
			alert('At least one options needs be enabled to generate password!')
		}
	}

	console.log(activeArray)


    for (var i = 0; i < passLength; i++) {
        var singleChar = getRandom(activeArray);
        password += singleChar;
    }

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    if (password === undefined) {return};
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
    }


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);