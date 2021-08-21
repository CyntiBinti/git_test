let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

function FizzBuzz(answer) {

    for (let i = 0; i < answer.length; i++) {

        if (answer.charAt(i) % 3 == 0) {
            console.log("Fizz");
        } else if (answer.charAt(i) % 5 == 0) {
            console.log("Buzz");
        } else if (answer.charAt(i) % 3 == 0 && answer % 5 == 0) {
            console.log("FizzBuzz")
        } console.log(answer.charAt(i))
    }
}

FizzBuzz(16)

/* Task: Write a program that takes a user’s input
and prints the numbers from one to the number the
user entered. However, for multiples of three
print Fizz instead of the number and for the
multiples of five print Buzz. For numbers which
are multiples of both three and five print FizzBuzz */