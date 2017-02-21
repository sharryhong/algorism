var a0 = 5;
var a1 = 6;
var a2 = 7;
var b0 = 3;
var b1 = 6;
var b2 = 10;

function compare() {

  var aArray = [a0, a1, a2];
  var bArray = [b0, b1, b2];
  var aWin = 0;
  var bWin = 0;
  var result = [];

  for( var i = 0; i < aArray.length; i++ ){
    if (aArray[i] > bArray[i]) {
      aWin++;
    } else if (aArray[i] < bArray[i]) {
      bWin++;
    }
  }

  result.push(aWin, bWin);
  result = result.join(' ');
  console.log(result);
}

compare();