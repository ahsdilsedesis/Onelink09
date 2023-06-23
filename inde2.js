const path = require('path');
const fs = require('fs');

let PATH = path.join(__dirname, './clubs.json');

function readFromJSON(file) {
   return JSON.parse(fs.readFileSync(file));
}

function writeToJSON(file, data) {
   fs.writeFileSync(file, JSON.stringify(data, null, 2), {
      encoding: 'utf-8',
      flag: 'w'
   });
   console.log(`Wrote ${data} to ${file}`);
}

console.log(readFromJSON(PATH)[1]);
