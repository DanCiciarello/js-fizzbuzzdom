/* Create a cycle for numbers from 1 to 100 */
for (let number = 1; number <= 100; number++) {
    
    /* If the selected number is divisible by 3 AND 5
    print "FizzBuzz" */
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } 
    /* Else if the selected number is divisible only by 3
    print "Fizz" */
    else if (number % 3 === 0) {
        console.log("Fizz");
    } 
    /* Else if the selected number is divisible only by 5
    print "Buzz" */
    else if (number % 5 === 0) {
        console.log("Buzz");
    } 
    /* Else print the number */
    else {
        console.log(number);
    }
};