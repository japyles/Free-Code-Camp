function sumAll(arr) {
  var mn = Math.min(arguments[0][0], arguments[0][1]);
  var mx = Math.max(arguments[0][0], arguments[0][1]);

  var r = 0;

  for (i = mn; i <= mx; i++) {
    r += i;
  }
  return r;
}

sumAll([10, 5]);
