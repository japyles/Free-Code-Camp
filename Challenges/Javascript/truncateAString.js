function truncate(str, num) {
  // Clear out that junk in your trunk
  if(num <= 3) {
    return str.slice(0,num).concat('...');
  } else if(str.length > num) {
    var str2 = str.slice(0,(num-3));
    var dot = '...';
    return str2.concat(dot);
    } else {
      return str;
    }
}

truncate("A-", 1);
