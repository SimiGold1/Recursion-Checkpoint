//Test if a word is a palindrome. A word is a palindrome if only if it can be read from left to right or from right to left: gag; kayak; php; radar;....
function isPalindrome(word) {
    // Convert the word to lowercase for case-insensitive comparison
    word = word.toLowerCase();
  
    // Initialize the counters for the start and end positions of the word
    let start = 0;
    let end = word.length - 1;
  
    // Compare characters at the start and end positions until they meet
    while (start < end) {
      // If the characters are different, the word is not a palindrome
      if (word[start] !== word[end]) {
        return false;
      }
  
      // Move the counters towards each other
      start++;
      end--;
    }
  
    // If the loop completes without finding any differences, the word is a palindrome
    return true;
  }
  
  //  usage
  let word1 = "gag";
  let word2 = "kayak";
  let word3 = "php";
  let word4 = "radar";
  
  console.log(isPalindrome(word1)); // Output: true
  console.log(isPalindrome(word2)); // Output: true
  console.log(isPalindrome(word3)); // Output: true
  console.log(isPalindrome(word4)); // Output: true