function hide_numbers(s){
	var result = "";
	var sLength = s.length;
	//함수를 완성해주세요
	for(var i = 0; i < sLength; i++){
		result += i < sLength - 4 ? "*" : s.charAt(i);
	}
	return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));