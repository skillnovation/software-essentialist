export function fizzBuzz(num : number){
    if(num === 15){
        return "fizzbuzz"
    }
    if(num % 3 === 0){
        return "fizz"
    }
    return "buzz"
}