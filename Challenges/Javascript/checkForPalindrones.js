function palindrome(str) {
  // Good luck!
  // var low = str.toLowerCase();

  var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  var checkPalindrome = removeChar.split('').reverse().join('');

  return removeChar===checkPalindrome;

}



palindrome("eye");
