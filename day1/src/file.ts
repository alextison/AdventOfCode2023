const fs = require('fs');
let sumCalibration : number = 0;
const numbers = [{"one": "1"}, {"two": "2"}, {"three": "3"}, {"four": "4"}, {"five": "5"}, {"six": "6"}, {"seven": "7"}, {"eight": "8"}, {"nine": "9"}];
let rightSumCalibration : number = 0;

function getCalibration(){
    const allFileContents = fs.readFileSync('input.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {
        let stringDigits : string = line.replace( /[^0-9]/g,'');
        let calibration = parseInt(stringDigits.substring(0, 1) + stringDigits.substring(stringDigits.length - 1));

        sumCalibration = sumCalibration + calibration;
    });
    
    return sumCalibration;
}

function getRightCalibration(){
    const allFileContents = fs.readFileSync('input.txt', 'utf-8');
    allFileContents.split(/\r?\n/).forEach(line =>  {

        let stringDigits : string = line.replace( /[^0-9]/g,'');
        let calibration = parseInt(stringDigits.substring(0, 1) + stringDigits.substring(stringDigits.length - 1));

        sumCalibration = sumCalibration + calibration;
    });
    return rightSumCalibration;
}

console.log(getRightCalibration());