export function fizzBuzz(num : number){
    if(num === 1){
        return "fizzbuzz"
    }
    if(num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    }
    if(num % 3 === 0){
        return "fizz"
    }
    return "buzz"
}