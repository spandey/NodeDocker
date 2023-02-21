Consider the following code:


const fs = require('fs');
const util = require('util');

const readFile = util.promisify(
    
    fs.readFile); 
    async function readTwoFiles(newYorkWeatherFile, londonWeatherFile) {
  const options = { encoding: 'utf-8' };
  const nyWeather = await readFile(newYorkWeatherFile, options);
  const londonWeather = await readFile(londonWeatherFile, options);
  return [nyWeather, londonWeather];
};

 let result = readTwoFiles('weatherFileNewYork', 'weatherFileLondon')
;
Select all the statements that are correct about readTwoFiles function.


(Select all acceptable answers.) 

1) The files are read using asynchronous calls.
2) The file read operations are blocking the event-loop.

3) It does not require the async keyword.
4) Variable result is a Promise.
5) Since the nyWeather and londonWeather variables are assigned the result of the await statement, they will both be Promises.
6) Files will be read one by one.