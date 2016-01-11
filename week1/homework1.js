var makeDiamond = function(num){
	var star = '';
	for(i = 0; i < num; i++){
		for(j = 0; j < num - i - 1; j++){
			star += ' ';
		}
		for(j = num - i - 1; j < num; j++){
			for(k = 0; k < 2; k++){
				star += '*';
				if(j === num - i - 1){
					break;
				}
			}
		}
		console.log(star);
		star = '';
	}
	for(i = num - 1; i > 0; i--){
		for(j = 0; j < num - i; j++){
			star += ' ';
		}
		for(j = num - i; j < num; j++){
			for(k = 0; k < 2; k++){
				star += '*';
				if(j === num - i){
					break;
				}
			}
		}
		console.log(star);
		star = '';
	}
}

makeDiamond(5);

makeDiamond(3);