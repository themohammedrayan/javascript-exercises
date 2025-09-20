
let answer = parseInt(prompt("Enter a Number:"))

let Fizzbuzz = function(answer) {
    let solution = [];
    for(let i=1;i<=answer;i++) {
        if(i%3 === 0 && i%5 === 0) {
            solution.push("FizzBuzz");
        }
        else if (i%3 === 0) {
            solution.push("Fizz");
        }
        else if (i%5 === 0) {
            solution.push("Buzz");
        }
        else {
            solution.push(i);
        }
    }
    return solution;
}

console.log(Fizzbuzz(answer))