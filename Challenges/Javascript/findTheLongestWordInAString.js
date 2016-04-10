function findLongestWord(str) {
  var lngr = [];
  var lng = str.split(' ');
  for (i = 0; i < lng.length; i++) {
    lngr.push(lng[i].length);

  }
  return Math.max.apply(null, lngr);
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
