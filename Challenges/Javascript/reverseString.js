function reverseString(str) {
  var newStr = str.split('');
  var revStr = newStr.reverse();
  var jStr = revStr.join('');
  var vStr = jStr.toString();
  return vStr;
}

reverseString("hello");
