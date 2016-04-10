function chunk(arr, size) {
 // Break it up.

 var arr2 = [];
 for(i = 0; i < arr.length; i += size) {
   arr2.push(arr.slice(i, size+i));

 }
 return arr2;
}

chunk([0, 1, 2, 3, 4, 5], 2);
