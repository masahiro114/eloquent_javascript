function fizzBuzz(){

    for(let counter = 0; counter < 100; counter += 1){

        // Able to divide by 3 and 5
        if (((counter % 3) === 0) && ((counter % 5) === 0)){
            console.log("FizzBuzz")
        }
        // Able to divie only by 3
        else if (((counter % 3) === 0)){
            console.log("Fizz");
        }
        // Able to divide only by 5
        else if (((counter % 5) === 0)){
            console.log("Buzz");
        }else{
            console.log(counter);
        }

    }

}
fizzBuzz()