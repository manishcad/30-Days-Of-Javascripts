/*
Factorial of a number is the product of all positive integers less than or equal to that number.

For example:
Factorial of 5 (denoted as 5!) is calculated as:
5! = 5 × 4 × 3 × 2 × 1 = 120
Call Stack:
Factorial(5)
  -> Factorial(4)
      -> Factorial(3)
            -> Factorial(2)
                -> Factorial(1)
                    returns 1
*/
const Factorial = (n) => {
    if(n<=1){
        return 1;
    }
    return n*Factorial(n-1)
}

console.log(Factorial(5)); //120