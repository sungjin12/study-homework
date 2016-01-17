var sumLineNum = function(num){
	var sum = 0;

	while(num > 0) {
		sum += num % 10;                // 나머지를 구해서 sum에 더한다.
		num = Math.floor(num / 10);     // 10으로 나눈후 소숫점 이하의 숫자를 없엔다.
	}

	console.log(sum);
}
sumLineNum(54321);

sumLineNum(543);