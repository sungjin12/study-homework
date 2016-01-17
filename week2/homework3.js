var getRandomNum = function(scope, num){
	var i = 0;
	var print = scope + '개 숫자 중 랜덤한 숫자 ' + num + '개는\n';
	var list = new Array();
	var price = 0;
	var bool = true;

	while(i < num) {                                   // 중복되는 값이 얼마나 나올지 모르기 떄문에 while로 반복문을 돌림
		price = Math.floor(Math.random() * scope) + 1; // 랜덤한 값 구하기

		for(j = 0; j < list.length; j++) {             // 중복되는 값 체크
			if(list[j] === price) {
				bool = false;
			}
		}

		if(bool) {
			list[i] = price;
			print += price + '\n';
			i++;
		}
		bool = true;
	}
	console.log(print);
}

getRandomNum(20, 5);