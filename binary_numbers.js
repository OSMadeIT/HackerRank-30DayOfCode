'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine(), 10);

    let decToBinString = (n >>> 0).toString(2).toString();

    let ones = 0;
    let max = 0;

    for (let i = 0; i < decToBinString.length; i++) {
        if (decToBinString[i] == 1) {
            ones += 1;
        } else if (decToBinString[i] == 0) {
            if (ones > max) max = ones;
            ones = 0;
        }
    }

    if (ones > max) max = ones

    console.log(max)

}
