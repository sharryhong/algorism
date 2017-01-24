function sumMatrix(A,B){
	// var answer = Array();
	var answer = new Array();
	answer[0] = new Array();
	answer[1] = new Array();
	var len = A.length;
	// 1. 매개변수 A엔 첫번째 배열, B엔 두번째 배열이 들어온다. 
	// A[0][0] + B[0][0]  
	// A[0][1] + B[0][1] ... 값을 구하는 함수
	for ( var i = 0; i < len; i++ ) {
		for ( var j = 0; j < len; j++) {
			answer[i][j] = A[i][j] + B[i][j];
		}
	}

	return answer;
	//return '['+'['+answer[0][0]+','+ answer[0][1]+']'+','+'['+answer[1][0]+','+ answer[1][1]+']'+']';
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]])) 