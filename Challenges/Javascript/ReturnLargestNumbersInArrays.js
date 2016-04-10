function largestOfFour(arr) {
  // You can do this!
  var arr2 = [];
  var m;
  for (i = 0; i < arr.length; i++) {
    m = 0;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > m) {
        m = arr[i][j];
      }
    }
  arr2.push(m);
  }
  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
