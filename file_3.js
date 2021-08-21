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