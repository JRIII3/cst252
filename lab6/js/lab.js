/*
 * Author: Jorge Rivera III
 * Created: 02/21/22
 * License: Public Domain
 */

//Define Variables
myTransport = ["Hyundai Veloster", "rides from friends", "walking", "RUNNING",];

myMainRide = {
  make: "Hyundai",
  model:"Veloster",
  color:"Blue",
  year:"2012",
  age: function() {
    return 2022 - age;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
