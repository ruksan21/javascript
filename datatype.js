// datatypes
// 1.string

let username = "Ruksan karki";
console.log(username);
// 2.number
let userage = 22;
console.log(userage);
// 3. boolean
let ispass = true;
console.log(ispass);

//.4 undefined

let useraddress = undefined;
console.log(useraddress);

// 5. object
const user = {
    name: "Ruksan",
    age: 22,
    isactive: true
};
user.user = "rubisha karki ";
user.name = "Ruksan karki";
console.log(user);

//.6 array
const users = ["Ruksan", "Rubisha", "John"];
console.log(users);

//.7 Null
let useremail = null;
console.log(useremail);

//.8 Symbol
const sym1 = Symbol("Ruksan");
const sym2 = Symbol("Ruksan");
console.log(sym1 == sym2);

//.9 BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);