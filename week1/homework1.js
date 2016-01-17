var makeDiamond = function(num){
	var star = '';
	var diamond_size = 2 * num - 1;
	var mid = Math.floor(diamond_size/2);
	for(i = 0; i < diamond_size; i++){
		if(i <= mid){
			for(j = 0; j < num; j++){
				if(j < num - i - 1){
					star += ' ';
				} else if(j === num - i - 1){
					star += '*';
				} else {
					star += '**';
				}
			}
		} else {
			for(j = 0; j < num; j++){   // 가운데를 넘어 갔기 때문에 총 길이에서 num만큼 빼줘 아래부분을 돌린다.
				if(j < i - mid){   // 가운데를 넘어가면 i가 mid보다 커지는데 그 커지는 수만큼 빈칸을 만든다.
					star += ' ';
				} else if(j === i - mid){
					star += '*';
				} else {
					star += '**';
				}
			}
		}
		star += '\n';
	}
	console.log(star);
}

// makeDiamond(5);

makeDiamond(3);