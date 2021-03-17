// Dichiarazione studentObj
var studentObj = {
  name: "Gianfranco",
  surname: "Pranzi",
  age: 19
};

var allStudents = [
  {
    name: "Paride",
    surname: "Frenzi",
    age: 17
  },
  {
    name: "Gervasio",
    surname: "Sprizzi",
    age: 18
  },
  {
    name: "Barberio",
    surname: "Tronchi",
    age: 17
  },
  {
    name: "Ferdinando",
    surname: "Orlandini",
    age: 20
  }
];

// studentObj output
var dataOutputBL = $("#blacklist");

for ( var key in studentObj ) {
  dataOutputBL.append(
    "<div>" + key + ": " + studentObj[key] + "</div>"
  );
}

// allStudents output
var dataOutputSt = $("#students");

for ( var i = 0; i < allStudents.length; i++ ) {

  dataOutputSt.append(
    "<div class=\"margin-top\">" + "Name" + ": " + allStudents[i]["name"] + "</div>"
    +
    "<div>" + "Surname" + ": " + allStudents[i]["surname"] + "</div>"
  );
}
