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

  console.log("converting", input);

  // loop through $keys from highest to lowest,
  // checking whether $input is >= the current key
  for (let i = 0; i < keys.length; i++) {
    const key = +keys[i];
    console.log("checking", key);

    if (input >= key) {
      console.log("found", key);

      // If true, append $result with the key's value (letter)
      result += numerals[key];
      console.log("appended", numerals[key], "to result.");

      // subtract the key (number) from $input
      console.log("input (", input, ") -", key);
      input -= key;
      console.log("input =", input);

      // decrement iterator so we can check for the current key again
      i--;
    }
    if (input < 1) break;
  }

  console.log("Done.");
  return result || 0;
}

// ? Failed tests:
// ! convertToRoman(649) should return the string DCXLIX
// ! convertToRoman(798) should return the string DCCXCVIII
// ! convertToRoman(891) should return the string DCCCXCI

console.log(convertToRoman(649));
// console.log(convertToRoman(798));
// console.log(convertToRoman(891));
