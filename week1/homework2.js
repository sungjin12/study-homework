var sumLineNum = function(num){
	a = num+'';
	sum = 0;
	for(i = a.length; i > 0; i--){
		b = Math.floor(num / Math.pow(10, i - 1));
		num = num - b * Math.pow(10, i - 1);
		sum += b;
	}
	console.log('각 자릿수의 총합 : ' + sum);
}

sumLineNum(54321);

sumLineNum(543);