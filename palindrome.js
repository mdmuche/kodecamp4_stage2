function palindrome(word) {
  const palindrome = word.split("").reverse().join("");
  if (word == palindrome) {
    return console.log("is a palindrome");
  } else {
    console.log("is not a palindrome");
  }
}

palindrome("level"); //> output 'is a palindrome'
// palindrome("energy"); //> output 'is not a palindrome'
