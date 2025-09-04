function checkNumber(num) {
  if ((num % 3 === 0 || num % 5 === 0) && num % 15 !== 0) {
    console.log(num + " is divisible by 3 or 5, but not by 15.");
  } else {
    console.log(num + " does not meet the condition.");
  }
}

checkNumber(9);
checkNumber(10);
checkNumber(20);