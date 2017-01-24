(function(global, XHR){
	'use strict';

	var xhr = new XMLHttpRequest();

	// console.log(xhr);

	var getDom = {
		'selectMenuItem': null,
		'tabLink' 	 : document.querySelectorAll('.tab-list a'),
		'tabActive'  : document.querySelector('.tab-list .tab-active'),
		'tabSection' : document.querySelector('.tab-contents .tab-content')
	};

	var eventAjax = {
		'xhrStatus' : function() {
			if ( this.status !== 200 ) {
				getDom.tabSection.innerHTML = '문제가 발생 되었습니다!';
				return;
			}

			if ( this.status === 200 ) {
				var content = JSON.parse(this.responseText);
				// for ( var key in content ) {
					console.log(content);
					getDom.tabSection.innerHTML = '<p>' + content.title + '</p>' + '<p>' + content.body + '</p>';
				// }
			}
		},
		'viewPage' : function(event) {
			event.preventDefault();
			var viewUrl = [1, 2, 3, 4];
			var viewUrlIdx = viewUrl[this.index];
			var page = 'http://jsonplaceholder.typicode.com/posts/' + viewUrlIdx;

			// 메뉴 탭 ///////////////////////////////////////////////////

			
			if ( getDom.selectMenuItem != null ) {
				console.log('aa');
				getDom.selectMenuItem.classList.remove('tab-active');
			}
			console.log(this);
			getDom.selectMenuItem = this;
			getDom.selectMenuItem.classList.add('tab-active');

			////////////////////////////////////////////////////////////
			
			xhr.open('GET', page);
			xhr.send();
			// url 뒷부분 표기
			global.location.hash = viewUrlIdx;
		}
	};


	// 메뉴
	for ( var i = 0; i < getDom.tabLink.length; i++ ) {
		var menuLink = getDom.tabLink[i];
		menuLink.index = i;

		// menuLink.classList.remove('tab-active');
		menuLink.addEventListener('click', eventAjax.viewPage);
	}

	// status
	xhr.addEventListener('load', eventAjax.xhrStatus);

	// url
	menuLink.addEventListener('load', eventAjax.viewPage);

// ActiveXObject : IE 
})(this, this.XMLHttpRequest || this.ActiveXObject('Microsoft.XMLHTTP'));