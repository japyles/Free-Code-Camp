function repeat(str, num) {
  // repeat after me

  if(num < 1) {
    return "";
  }

  return str.repeat(num);
}

repeat("abc", 3);
