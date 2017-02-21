/*
Given an array of  integers, can you find the sum of its elements?

Input Format

The first line contains an integer, , denoting the size of the array. 
The second line contains  space-separated integers representing the array's elements.

Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11
Sample Output

31
*/

var arrnum = [1, 2, 3, 4, 10, 11];
var leng = arrnum.length;

function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(el){
    sum += el;
  });
  return sum;
  console.log(sum);
}

sumArray(arrnum);

/*
function main() {
    var n = parseInt(readLine()); // 정수로 바꾼다
    arr = readLine().split(' '); // string array
    arr = arr.map(Number); // number array 

}
*/