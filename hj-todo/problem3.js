/* 
 * 1. executeItemNode 함수를 완성하세요
 * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
 * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
 * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
 * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
 * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
 * 함수를 여러개로 나눠도 상관없습니다.
 * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
 * 
 * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
 * 
 * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
 */
 
/**
 * --------------------------------
 * DOM 탐색, 조작 헬퍼 함수
 * --------------------------------
 */
 
function queryAll(selector) {
	return document.querySelectorAll(selector);
}
 
function query(selector) {
	return document.querySelector(selector);
}
 
function createEle(element_name, text) {
	var create_node = document.createElement(element_name);
	if ( typeof text === 'string' ) {
		var text_node = document.createTextNode(text);
		create_node.appendChild(text_node);
	}
	return create_node;
}
 
///////////////////////////////////////////////////////////////////
 
function init() {
	// DOM 탐색 변수 선언
}
 
function doSomething(actionType, todoORnumber)  {
}
 
 
//////////////////////////////////////////////////////////////////
 
var controller = query('.controller');
var addWrap = query('.addWrap');
var message = query('.message');
var ol = query('ol');
var li = ol.querySelectorAll('li');
var addBtn = query('.add');
var removeBtn = query('.remove');
// console.log(li); 
// li에는 각 목록에 대한 유사배열이 담겨있다. 
// 여기에서 li내의 text node만 빼서 저장해보자.
var textLi = []; // 초기화


// console.log(textLi);
addBtn.addEventListener("click", function(){
	var inputValue = this.previousElementSibling.value;
	// 같은 목록이 있는지 테스트 
	var sameText = false;
	// textLi에 텍스트만 담기 
	for(var i=0; i<li.length; i++){
		textLi[i] = li[i].firstChild.nodeValue;
		// console.log(textLi[i]);
		if(inputValue == textLi[i]){
			sameText = true;
		}
	}
	if(sameText){
		var messageResult = '동일한 목록이 있어요';
		sameText = false;
		message.innerHTML = messageResult;
		setTimeout(function(){
			message.removeChild(message.firstChild);
		}, 3000)
	}else{
		var newList = createEle('li', inputValue);
		var addList = ol.appendChild(newList);
		// li유사배열 -> 배열로 써서 마지막에 목록추가할 수 있게 한다.
		li = Array.prototype.slice.apply(li);
		li.push(addList);
	}
	
});

removeBtn.addEventListener("click", function(){
	var inputNum = this.previousElementSibling.value;
	// 해당 번호가 없거나 숫자가 아닌 경우 오류표시는 나중에 하기 
	console.log(li[inputNum-1]); 
	ol.removeChild(li[inputNum-1]);
	li = Array.prototype.slice.apply(li);
	li.splice(inputNum-1, 1);
	console.log(li);
});
 
// controller.addEventListener("click", function(evt) {
// 	var btn = evt.target;
// 	if ( btn.tagName !== "BUTTON" ) { return; }
// 	var inputValue = btn.previousElementSibling.value;
// 	var actionType = btn.className;
// 	doSomething(actionType, inputValue);
 
// }); // event end 