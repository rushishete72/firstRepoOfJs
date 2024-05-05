// Creating a new Date object representing the current date and time
let mydate = new Date();
// Printing the Date object to the console
console.log(mydate);

// Creating a new Date object for a specific date (YYYY, MM, DD)
let specificDate = new Date(2023, 10, 25);
console.log(specificDate);

// Creating a new Date object for a specific date and time (YYYY, MM, DD, HH, MM, SS)
let specificDateTime = new Date(2023, 10, 25, 10, 30, 0);
console.log(specificDateTime);

// Getting current year
let currentYear = mydate.getFullYear();
// Getting current month (0-11)
let currentMonth = mydate.getMonth();
// Getting current day of the month (1-31)
let currentDay = mydate.getDate();
// Getting current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
let currentDayOfWeek = mydate.getDay();

// Format date as YYYY-MM-DD
let formattedDate = `${mydate.getFullYear()}-${mydate.getMonth() + 1}-${mydate.getDate()}`;
console.log(`Formatted date: ${formattedDate}`);

// Creating two date objects
let date1 = new Date(2023, 10, 25);
let date2 = new Date(2023, 10, 30);
// Calculating the difference in milliseconds
let differenceInMilliseconds = date2 - date1;
// Converting milliseconds to days
let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
console.log(`Difference in days: ${differenceInDays}`);



//++++++++++++++***********+++++++++++++++


let mydate1=new Date()

console.log(mydate1);
console.log(mydate1.toString())
console.log(mydate1.toDateString())
console.log(mydate1.toLocaleString())
console.log(mydate1.toLocaleDateString())
