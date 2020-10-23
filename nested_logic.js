function processData(input) {
    //Enter your code here
    let dates = input.split("\n"), a = dates[0].split(" ").map(Number), b = dates[1].split(" ").map(Number)
    actualReturnDate = new Date(a[2], a[1], a[0]), expectedReturnDate = new Date(b[2], b[1], b[0]), fine = 0;

    if (actualReturnDate <= expectedReturnDate) {
        fine = 0;
    } else if (a[1] == b[1] && a[2] == b[2]) {
        fine = 15 * (a[0] - b[0]);
    } else if (a[2] == b[2]) {
        fine = 500 * (a[1] - b[1]);
    } else {
        fine = 10000;
    }

    console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
