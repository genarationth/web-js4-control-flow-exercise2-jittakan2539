// ## Exercise2

// Create a day of the week translator using **Switch Case** statement. <br>
// Your program should read a variable called “dayNumber”, and print (with console.log) the corresponding day of the week<br>
// where **0 is Sunday and 6 is Saturday.**<br>
// For any other values, your program should print “Invalid day number”.<br>
// Test your program for all week days values.

const dayNumber = 0;

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");

}
