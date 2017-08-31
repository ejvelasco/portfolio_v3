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
	const cover = document.getElementById('cover');
	const MARGIN = 200;
	const SCROLL_INDEX = .05;
	const BODY_STYLE_DELAY = 500;
	cover.addEventListener('mousemove', onMouseMove(event, SCROLL_INDEX, MARGIN));
	cover.addEventListener('mouseenter', onMouseEnter(event, BODY_STYLE_DELAY));
}

export default cover;

