function mutation(arr) {
  var correct = 1;
  var ar = arr[0].toLowerCase().split("").sort().join();
  var ar2 = arr[1].toLowerCase().split("").sort().join();

  for(i = 0; i < ar2.length; i++) {
    if(ar.indexOf(ar2[i]) !== -1) {
      correct *= 1;
    } else {
      correct *= 0;
    }
  }

  if(correct) {
    return true;
  } else {
    return false;
  }

  //return ar.substr(ar2[0], ar2.length) == ar2.substr(0);
  //return ar.substr(ar.charAt(ar2[0]));
  //return ar2.substr(0);
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
