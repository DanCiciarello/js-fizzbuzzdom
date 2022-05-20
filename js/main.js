// Select grid HTML element
let numberGrid = document.querySelector("#numberGrid")


/* Create a cycle for numbers from 1 to 100 */
for (let number = 1; number <= 100; number++) {
    
    /* If the selected number is divisible by 3 AND 5
    print "FizzBuzz" */
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
        numberGrid.innerHTML += `<div class="col"><div class="squareNumber">FizzBuzz</div></div>`
    } 
    /* Else if the selected number is divisible only by 3
    print "Fizz" */
    else if (number % 3 === 0) {
        console.log("Fizz");
        numberGrid.innerHTML += `<div class="col"><div class="squareNumber">Fizz</div></div>`
    } 
    /* Else if the selected number is divisible only by 5
    print "Buzz" */
    else if (number % 5 === 0) {
        console.log("Buzz");
        numberGrid.innerHTML += `<div class="col"><div class="squareNumber">Buzz</div></div>`
    } 
    /* Else print the number */
    else {
        console.log(number);
        numberGrid.innerHTML += `<div class="col"><div class="squareNumber">${number}</div></div>`
    }
};