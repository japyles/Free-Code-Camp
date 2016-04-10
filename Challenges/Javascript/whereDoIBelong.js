function where(arr, num) {
  // Find my place in this sorted array.
  srt = arr.sort(function(a, b){return a-b});
  for(i = 0; i < srt.length; i++) {
    if(srt[i] > num || srt[i] == num) {
      return i;
    } else if(num > srt[srt.length - 1]) {
      return srt.length;
    }
  }
}

where([2, 5, 10], 15);
