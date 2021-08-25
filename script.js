function convertToRoman(num) {
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const keys = Object.keys(numerals).reverse(); // highest to lowest
  let input = num;
  let result = "";

  // loop through $keys from highest to lowest,
  // checking whether $input is >= the current key
  for (let i = 0; i < keys.length; i++) {
    const key = +keys[i];
    if (input >= key) {
      // If true, append $result with the key's value (letter)
      result += numerals[key];
      // subtract the key (number) from $input
      input -= key;
      // decrement iterator so we can check for the current key again
      i--;
    }
    if (input < 1) break; // break out if input reached 0
  }

  return result || 0;
}

console.log(convertToRoman(649)); // DCXLIX
console.log(convertToRoman(798)); // DCCXCVIII
console.log(convertToRoman(891)); // DCCCXCI
