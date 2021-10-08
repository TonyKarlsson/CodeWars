//************** DIGITAL ROOT **************//
const digital_root = (n) => {
  let input = n;
  let arr = [];
  const reducer = (a, b) => a + b;

  while (input > 9) {
    arr = input.toString().split("").map(Number);
    input = arr.reduce(reducer);
  }
  return input;
}
let number = 666;
console.log(`The digital root of ${number} is ${digital_root(number)}`);

//************** DUPLICATE ENCODER **************//
const duplicateEncode = (word) => {
  let wordArr = word.toLowerCase().split("");
  let encodedString = "";

  wordArr.forEach((letter, index) => {
    if (wordArr.indexOf(letter) !== index) {
      encodedString += `)`
    } else if (wordArr.lastIndexOf(letter) !== index) {
      encodedString += `)`
    } else {
      encodedString += `(`
    }
  })
  return encodedString;
}
let input = "success";
console.log(`\"${input}\" after encoding is \"${duplicateEncode(input)}\"`);

//************** MORSE DECODER **************//
const decodeMorse = (morseCode) => {
  var MORSE_CODE = {
    ".-": "A", "-...": "B", "-.-.": "C", "-..": "D",
    ".": "E", "..-.": "F", "--.": "G", "....": "H",
    "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
    "--": "M", "-.": "N", "---": "O", ".--.": "P",
    "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
    "-.--": "Y", "--..": "Z",
  };

  let trimMorseCode = morseCode.trim();
  let codeWordsArr = trimMorseCode.split("   ");
  let result = [];
  for (let i = 0; i < codeWordsArr.length; i++) {
    currentWord = codeWordsArr[i].split(" ");
    for (let j = 0; j < currentWord.length; j++) {
      if (currentWord[j]) {
        result.push(MORSE_CODE[currentWord[j]])
      }
    }
    if (i !== codeWordsArr.length - 1) {
      result.push(' ');
    }
  }
  return result.join("");
}
//Letters are separated by single space, words by 3 spaces
// Should return "HEY JUDE"
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

//************** EQUAL SIDES OF AN ARRAY **************//
const findEvenIndex = (arr) => {
  let inputValues = arr;

  for (let i = 1; i < inputValues.length; i++) {
    let leftArr = inputValues.slice(0, i);
    let rightArr = inputValues.slice(i + 1);
    if (leftArr.reduce((acc, val) => acc + val, 0) === rightArr.reduce((acc, val) => acc + val, 0)) { return i };
  }
  return -1
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))

//************** IS THE NUMBER A PRIME? **************//
// Works with negative numbers, even though negative numbers usually doesn't count as primes
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i === 0) { return false };
    }
    return true;
  }
}
console.log(isPrime(10));

//************** IS THE NUMBER NARCISSISTIC? **************//
const isNarcissistic = (value) => {
  let pwrOf = value.toString().length;
  let numArr = Array.from(String(value), Number);
  let pwrNumArr = [];
  let pwrNum = 0;
  const reducer = (acc, val) => acc + val;

  for (let i = 0; i <= numArr.length - 1; i++) {
    pwrNumArr.push(Math.pow(numArr[i], pwrOf));
  }
  pwrNum = pwrNumArr.reduce(reducer);
  return pwrNum === value;
}
console.log(isNarcissistic(7));

//************** IS THIS A TRIANGLE? **************//
const isTriangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(2, 2, 5));
console.log(isTriangle(10, 1, 6));

//************** IQ TEST **************//
const iqTest = (numbers) => {
  let numArr = Array.from(numbers.split(' '), Number);
  let evenNumArr = [];
  let oddNumArr = [];

  for (let i = 0; i <= numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      evenNumArr.push(numArr[i]);
    } else {
      oddNumArr.push(numArr[i]);
    }
  }
  return (evenNumArr.length < 2) ? numArr.indexOf(evenNumArr[0]) + 1 : numArr.indexOf(oddNumArr[0]) + 1;
}
console.log(iqTest("2 4 7 8 10"));
