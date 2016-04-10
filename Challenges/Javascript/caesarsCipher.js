function rot13(str) { // LBH QVQ VG!

  var newRot = [];
  var newerRot = [];

  for(i = 0; i < str.length; i++) {
    if(str[i].charCodeAt(str[i]) == 33 || str[i].charCodeAt(str[i]) == 63 || str[i].charCodeAt(str[i]) == 20 || str[i].charCodeAt(str[i]) == 46) {
      newRot.push(str[i].charCodeAt(str[i]));
    } else {
    newRot.push(str[i].charCodeAt(str[i]) + 13);
    }
  }

  for(i = 0; i < newRot.length; i++) {
    if(newRot[i] >= 91) {
      newerRot.push(newRot[i] - 26);
    } else if(newRot[i] == " ") {
      newerRot.push(" ");
    } else {
      newerRot.push(newRot[i]);
    }
  }

  var rot = [];

  for(i = 0; i < newerRot.length; i++) {
    rot.push(newerRot[i].toString());
  }

  var newVar = [];

  for(i = 0; i < rot.length; i++) {
    newVar.push(String.fromCharCode(rot[i]));
  }

  var bet = "";
  for(i = 0; i < newVar.length; i++) {
    if(newVar[i] == '-') {
      bet += " ";
    } else {
      bet += newVar[i];
    }
  }
  return bet;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
