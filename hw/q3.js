function findSmallest(a, b, c, d) {
  let smallest = a;
  if (b < smallest) {
    smallest = b;
  }
  if (c < smallest) {
    smallest = c;
  }
  if (d < smallest) {
    smallest = d;
  }
  console.log("The smallest number is: " + smallest);
}
findSmallest(12, 5, 8, 8);