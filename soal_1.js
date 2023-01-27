var inputString = "NEGIE1";
var inputStringArray = inputString.split("");
var reversedStringArray = inputStringArray.slice(0, -1).reverse();
reversedStringArray.push(inputStringArray[inputStringArray.length - 1]);
var reversedString = reversedStringArray.join("");
console.log(reversedString);

// Outpu-nya: "EIGEN1"