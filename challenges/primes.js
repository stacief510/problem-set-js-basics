/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography

*/

// YOUR CODE HERE
function isPrime(num) {

    //take the number, see if it is evenly divisible, if yes, return true.
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
            break;
        }
    }
    return true;
}

function primes(max){
	//start at 2 up til maxNum, 
	var allPrimeNum = [];
	for (var i = 2; i<=max; i++){ 
	//check each number if prime (isPrime(i))
		if(isPrime(i)){
		allPrimeNum.push(i);
		}
	//write down if prime and store (push to answer array)

	//return array of all prime numbres below that a max number
}
		return allPrimeNum;
}

console.log(primes(13));