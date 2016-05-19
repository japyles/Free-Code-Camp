function pairElement(str) {

  var strSplit = str.split('');
  var pairs = [];

  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === "G") {
      pairs.push([strSplit[i],"C"]);
    } else if (strSplit[i] === "C") {
      pairs.push([strSplit[i],"G"]);
    } else if (strSplit[i] === "A") {
      pairs.push([strSplit[i],"T"]);
    } else {
      pairs.push([strSplit[i],"A"]);
    }
  }
  return pairs;
}

pairElement("ATCGA");
