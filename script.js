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
    100: "X",
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
  keys.map((key) => {
    // ? console.log("checking", key);
    if (input >= +key) {
      // ? console.log("found", key);

      // If true, append $result with the key's value (letter)
      result += numerals[key];
      // ? console.log("appended", numerals[key], "to result");

      // and subtract the key (number) from $input
      input -= +key;

      // ! then start again from the current key / check the current key again
      // * use a FOR loop instead so we can control the value of $i and iterate through indexes of $keys
      // * i.e. iterate through keys and increment/decrement $i when a key is found in $input
      // * this way we can repeat the iteration for a key when it is found
    }
  });

  // ! ISSUES:
  // ! Each key is checked only once.
  // ! ...When 10 is found in 36 we are not checking for 10 in 26
  // ! ...Instead, the next key (9) is checked for.

  return result;
}

// console.log(convertToRoman(1));
// console.log(convertToRoman(10));
// console.log(convertToRoman(11));
// console.log(convertToRoman(15));
console.log(convertToRoman(36));
// console.log(convertToRoman(1001));
