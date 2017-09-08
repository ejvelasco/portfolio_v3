function adjustBodyStyle() {
	document.body.style.transition = '';
}

function onMouseMove(event, SCROLL_INDEX, MARGIN) {
	function cb(event) {
		const X_OFF = Math.floor(SCROLL_INDEX * event.clientX) - MARGIN;
		const Y_OFF = Math.floor(SCROLL_INDEX * event.clientY) - MARGIN;
		document.body.style.backgroundPosition = `${X_OFF}px ${Y_OFF}px`;
	}
	return cb;
}

function onMouseEnter(event, BODY_STYLE_DELAY) {
	function cb(event) {
		document.body.style.transition = 'background .5s ease';
		setTimeout(adjustBodyStyle, BODY_STYLE_DELAY);
	}
	return cb;
}

function cover() {
	const bgDiv = document.getElementById('background');
	bgDiv.style.opacity = '1';
}

export default cover;

