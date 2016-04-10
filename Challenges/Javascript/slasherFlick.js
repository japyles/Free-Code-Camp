function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var arr2 = arr.slice(howMany, arr.length);
  return arr2;
}

slasher([1, 2, 3], 2);
