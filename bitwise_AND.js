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

function ab(n, k) {
    var max = 0;
    for (let b = 0; b <= n; b++) {
        for (let a = 0; a < b; a++) {
            let ab = a & b;
            if (ab < k && ab > max) {
                max = ab;
            }
        }
    }

    return max;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        console.log(ab(n, k));
    }
}
