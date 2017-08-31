function adjustBodyStyle() {
	document.body.style.transition = '';
}
function onMouseMove(event) {
	const X_OFF = Math.floor(SCROLL_INDEX * event.clientX) - MARGIN;
	const Y_OFF = Math.floor(SCROLL_INDEX * event.clientY) - MARGIN;
	document.body.style.backgroundPosition = `${X_OFF}px ${Y_OFF}px`;
}

function onMouseEnter(event) {
	const BODY_STYLE_DELAY = 500;
	document.body.style.transition = 'background .5s ease';
	setTimeout(adjustBodyStyle, BODY_STYLE_DELAY);
}

function cover() {
	const cover = document.getElementById('cover');
	const MARGIN = 200;
	const SCROLL_INDEX = .05;
	cover.addEventListener('mousemove', onMouseMove);
	cover.addEventListener('mouseenter', onMouseEnter);
}

