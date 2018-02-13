
var number = Number(prompt('Enter: 0 < N <= 20', ''));
var str = "";
if (number > 0 && number <= 20) {
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= number - i; j++) {
      str += "    ";
    } else {
  console.error("Incorrect!");
}