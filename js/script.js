// ESERCIZIO 1 E 2

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

function allStudentsOutput () {
  for ( var i = 0; i < allStudents.length; i++ ) {

    dataOutputSt.append(
      "<div class=\"margin-top\">" + "name" + ": " + allStudents[i]["name"] + "</div>"
      +
      "<div>" + "surname" + ": " + allStudents[i]["surname"] + "</div>"
    );
  }
}

allStudentsOutput();




// ESERCIZIO 3

// addStudent function on btn click
var addStudentBtn = $('#add-student-btn'),
    dataOutputNS = $('#new-students'),
    newStudent,
    studentAge,
    studentName,
    studentSurname,
    valid;

addStudentBtn.click( function () {
  valid = false;
  while ( valid == false ) {
    studentName = prompt("Student's name");
    studentName = inputControl(studentName);
  }
  valid = false;
  while ( valid == false ) {
    studentSurname = prompt("Student's surname");
    studentSurname = inputControl(studentSurname);
  }
  valid = false;
  while ( valid == false ) {
    studentAge = parseInt( prompt("Student's age") );
    if ( isNaN( studentAge ) || studentAge < 6 || studentAge > 150 ) {
      alert("Please enter a valid number")
    } else {
      valid = true;
    }
  }

  newStudent = {
    name: studentName,
    surname: studentSurname,
    age: studentAge
  }

  allStudents.push(newStudent);
  allStudentsOutput();

  dataOutputNS.append("<div class=\"margin-top\">");
  for ( var key in newStudent ) {
    dataOutputNS.append(
      "<div>" + key + ": " + newStudent[key] + "</div>"
    );
  }
  dataOutputNS.append("</div>");
});



function inputControl (word) {

  containsNumbers = false;
  // Controllo se è stato inserito un numero per ogni carattere
  j = 0;
  while ( j < word.length && containsNumbers == false ) {
    if ( !isNaN( parseInt( word[j] ) ) ) {
      containsNumbers = true;
    }
    j++;
  }
  if ( containsNumbers == true ) {
    alert("Please do not enter numbers");
  // Controllo se l' input è vuoto o contiene soltanto spazi
  } else if (word.length === 0 || !word.trim()) {
    alert("Please enter a word");
  } else {
      // Funzione per rendere tutte le lettere minuscole e poi la prima maiuscola
      word = word.toLowerCase();
      word = word.charAt(0).toUpperCase() + word.slice(1);
      valid = true;
      return word;
  }
}
