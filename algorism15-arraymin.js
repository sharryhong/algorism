function getMinSum(A,B){
	var answer = 0;
  var len = A.length;
  var preNum = 0;
  var nowNum = 0;
  for(var i = 0; i < len; i++) {
    for(var j = 0; j < len; j++) {
      if(preNum) {
        nowNum = A[i] * B[j];
        // console.log("answer2="+answer, "preNum2="+preNum, "nowNum2="+nowNum);
        if(nowNum < preNum) {
          preNum = nowNum;
          // console.log("answer3="+answer, "preNum3="+preNum, "nowNum3="+nowNum);
        } else { 
          answer = preNum; 
          // console.log("answer4="+answer, "preNum4="+preNum, "nowNum4="+nowNum);
        }
      }else{
        preNum = A[i] * B[j];
        // console.log("preNum1="+preNum);
      }
    }
  }
	return answer;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
// var tA = [1,2],
// 	tB = [3,4];

// console.log(getMinSum(tA,tB));
console.log(getMinSum([228,816,934,1725,3002,5384,6788,6844,7226,7925],[658,1402,2096,2590,2907,3607,3927,4481,5681,6583]));
// getMinSum(tA,tB)