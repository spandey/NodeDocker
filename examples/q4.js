A project folder contains two files that are listed below. Fill in the blanks in these two files so that, 
when main.js is invoked with a temperature in Fahrenheit, 
the same temperature in Celsius is appended to log.txt.
 utility.js:

 ___________________.toCelsius = (fahrenheit) => { 
  return (fahrenheit-32) * 5/9; 
}
main.js:
 const fs = require('fs');
const utility = require('______ utility_______'); 

fs.appendFile('log.txt',____utility________.toCelsius(process.argv[2]) + "\n",
(err) => { if (err) throw err; });

For example, when "node main.js 68" is executed, "20" should be appended to the log.txt.