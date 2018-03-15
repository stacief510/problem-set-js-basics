/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE
console.log("sing.js loaded");

let totalBottles = 5;

for (totalBottles; totalBottles >0; totalBottles--){
  if(totalBottles > 2 ){
  console.log(`${totalBottles} bottles of beer on the wall, ${totalBottles} bottles of beer!`);
  console.log('Take one down and pass it around,');
  console.log(`${totalBottles-1} bottles of beer on the wall!`);

  }else if (totalBottles > 1){
    console.log(`${totalBottles} bottles of beer on the wall, ${totalBottles} bottles of beer!`);
    console.log('Take it down and pass it around,');
    console.log(`${totalBottles-1} bottle of beer on the wall!`);

  }else if (totalBottles <= 1){
    console.log(`${totalBottles} bottle of beer on the wall, ${totalBottles} bottle of beer!`);
    console.log('Take it down and pass it around,');
    console.log('No more bottles of beer on the wall...');
  }
}