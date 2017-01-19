function hide_numbers(s){
	var result = "";
	//함수를 완성해주세요
	result = s.split("");
	for(var i = 0; i < result.length - 4; i++){
		result[i] = "*";
	}
	return result.join("");
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));