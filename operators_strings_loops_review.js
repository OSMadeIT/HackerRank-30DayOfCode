function processData(input) {
    //Enter your code here
  input = input.split('\n');

  for (i  =  1; i   < input.length;  i++) {
    var splitInput = input[i].split('');

    var evenChars = '';
    var oddChars = '';

    for (j  =  0; j < splitInput.length; j++) {
      if (j % 2 === 0) {
        evenChars +=  splitInput[j];
      } else {
        oddChars += splitInput[j];
      }
    }
    console.log(evenChars + ' ' + oddChars);
  }
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
