function destroyer(arr) {
  // Remove all the values
  var arr2 = [];
  for(var i = 1; i < arguments.length; i++) arr2[i] = arguments[i];

  /* or for(i = 1; i < arguments.length; i++) {
  arr2.push(arugments[i];)
} */

  return arr.filter(function (val) {
    return arr2.indexOf(val) === -1;
  });
}

//arr2.indexOf(val) === -1; will return those that are false; thus those that are not in arr2 

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
