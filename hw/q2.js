function isValidTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log(" Valid triangle");
  } else {
    console.log("Invalid triangle");
  }
}
isValidTriangle(3, 4, 5);
