let n = 10;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}


// employee key 
let employee  = {
    name : "ruksan " ,
    Age : "21" ,
    job : "mct hanne" ,
    address : "itahri 2 sunsari " 
};
for  (let key in employee){
    console.log(key, ":", employee[key]);
}