function writeCards(names, giftType) {
	const arr = [];
	for (let i = 0; i < names.length; i++) {
		arr.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
	}
	return arr;
}

function countDown(startNum) {
	for (let i = startNum; i >= 0; i--) {
		console.log(i);
	}
}
