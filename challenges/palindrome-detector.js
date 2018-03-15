/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom 
  - racecar 
  - stack cats
  - Pull up if I pull up 
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE



function isPalindrome(word){
  //input string
  debugger
  let lowerCaseWord = word.toLowerCase();
  let array = lowerCaseWord.split("");
  let reverseArray = lowerCaseWord.split("").reverse();
  let reversedString = reverseArray.join("");
  return reversedString === lowerCaseWord;
}
  //check string to see if palindrome - split to letters to read L-R and then R-L
  //if its a palindrome return true
