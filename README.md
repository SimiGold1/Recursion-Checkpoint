# Recursion-Checkpoint
Certainly! Here's an updated version of the README file that includes the steps used in the code:

# Palindrome Checker

This repository contains a JavaScript function to check if a word is a palindrome. A palindrome is a word that reads the same forward and backward, such as "gag," "kayak," or "radar."

## Function Description

The `isPalindrome` function takes a word as input and checks if it is a palindrome. Here are the steps used in the code:

1. Convert the word to lowercase: The function converts the word to lowercase to make the comparison case-insensitive.

2. Initialize counters: The function initializes two counters, `start` and `end`, which represent the start and end positions of the word.

3. Compare characters: The function enters a loop and compares characters at the `start` and `end` positions.

4. Check for differences: If the characters at `start` and `end` positions are different, the function returns `false`, indicating that the word is not a palindrome.

5. Move counters: If the characters are the same, the function moves the `start` counter one position forward and the `end` counter one position backward.

6. Repeat until completion: The loop continues until the `start` and `end` counters meet or cross each other.

7. Return the result: If the loop completes without finding any differences, the function returns `true`, indicating that the word is a palindrome.



