import './../scss/style.scss'

function myAwesomeFunction() {
  const numbers: number[] = [9, 8, 1, 2, 0, 3, 8, 1, 2]; 

  for (let i = 0; i < numbers.length; i ++) {
    if (i % 2 === 0) {
      numbers[i] *= 2;
    } else {
    numbers[1] *= 1; 
  }
}
console.log(numbers);
}
myAwesomeFunction();

/*
Övnig 1 med TS

function sum (x: number, y: number): number {
  let theResult: number = x + y; 
  return theResult;
}

const totalSum = sum(5, 10);
console.log(totalSum);

Övning 1.1 

function myFirstTypeScript() {
const name: string = "Lo Salmson";

const x: number = 5;
const y: number = 10;

const sum: number = x + y;

console.log(name);
console.log(sum);
}
myFirstTypeScript();

Övning 1

function myFirstTypeScript() {
  if (confirm ("Are you sure?") === true) {
    alert("You pressed OK!");
  } else {
    alert("You canceled!");
  }
}
myFirstTypeScript(); */
