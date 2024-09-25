const number = 23;
// string, number, boolean
if (typeof number === "number") {
    console.log("Value is a Number");
}
else{
    console.log("Value is Not a Number");
}


const numbers = [3, 12, 78, 90];
const student = {name: "Rongila Rafsan", job: "Khawadawa Kora"}

console.log(Array.isArray(numbers));
console.log(Array.isArray(number));
console.log(typeof student);