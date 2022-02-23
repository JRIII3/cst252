/*
 * Author: Jorge Rivera III
 * Created: 02/23/22
 * License: Public Domain
 */

//Sorting Username
//Function takes user input and sorts the letters of the Username
function sortUserName() {
  var userName = window.prompt("Sup, what's your name, I got you");
  console.log("userName =", userName);
  //Split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //Sorting array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //Array and string join
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//Output
document.writeln("Here is your name! ",
  sortUserName(), "</br>");
