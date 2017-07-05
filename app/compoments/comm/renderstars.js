export const renderStars = (val) => {
	let start = [], ary = val.split('');
	for(let i = 0; i < ary[0]; i++) {
		start.push('★');
	}
	if (ary[1] !== '0') {
		start.push('☆');
	} 
	return start;
}