//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// Only change code below this line
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) { //This checks if name is in array, right?
      if (contacts[i].hasOwnProperty(prop)) { //If name is found, it goes here and looks for prop, correct?
      return contacts[i][prop]; //I think this is where it is going wrong, but not sure why.
      }
      return 'No such property';
    }
  }
  return 'No such contact';
// Only change code above this line
}

// Change these values to test your function
lookUp("Harry", "likes");
