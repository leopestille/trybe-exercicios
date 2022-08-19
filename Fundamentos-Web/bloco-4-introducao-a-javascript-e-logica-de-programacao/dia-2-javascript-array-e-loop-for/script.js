
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

let media = numbers.length - 1;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
let result = sum / numbers.length;

if(result > 20) {
  console.log("The result is higher than 20");
}else{
  console.log("The result is lower or equal than 20");
}