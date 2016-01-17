var getRandomNum = function(scope, num){
	var i = 0;
	var print = scope + '개 숫자 중 랜덤한 숫자 ' + num + '개는\n';
	var list = new Array();
	var price = 0;
	var list_size = 0;
	var bool = true;

	while(i < num) {
		price = Math.floor(Math.random() * scope) + 1; // 랜덤한 값 구하기

		list_size = list.length;
		for(j = 0; j < list_size; j++) {                 // 리스트에 담긴 값중 새롭게 구한 랜덤값이 있는지 확인하여 없다면 넣기
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