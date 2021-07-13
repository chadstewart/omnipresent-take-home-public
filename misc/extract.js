'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('all.json');
let countries = JSON.parse(rawdata);
let outputData = [];

for(let i = 0; i < countries.length; i++) {
    outputData.push(countries[i].name);
}

let result = JSON.stringify(outputData);
fs.writeFile('output.json', result, () => console.log('I\'m done!'));