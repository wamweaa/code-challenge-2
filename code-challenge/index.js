function primeNumbers(num) {
    //check if number is less or equal to 1
    if (num <= 1) {
        return false;//if num is less than or equal to 1,it's not prime
    }
    //iterate from 2 to the square root of num
    for (let x = 2; x <= Math.sqrt(num); x++) {
        // If num is divisible by any number within the range [2, sqrt(num)], it's not prime
        if (num % x === 0) {
            return false;
        }

    }
     // If num passes all checks, it's prime
    return true

}
function allPrimeNumbers(numbers) {
    return numbers.filter(num => primeNumbers(num));
}
//test code
const primeeNumbers = allPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(primeeNumbers);
