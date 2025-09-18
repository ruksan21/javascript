// Write a javascript problem to create an array of numbers and use forEach() to print all the even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(num);
    }   
});
