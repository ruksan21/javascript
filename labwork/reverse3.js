// Write a javascript program to reverse a string using a do while loop.
function reverseString(str) {
    let reversed = "";
    let i = str.length - 1; 
    do {
        reversed += str[i];
        i--;
    } while (i >= 0);
    return reversed;
}
let input = "25876654";
console.log("Original String: " + input);
console.log("Reversed String: " + reverseString(input));


