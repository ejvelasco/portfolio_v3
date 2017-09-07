function open(url) {
	function cb() {
		window.open(url);
	}
	return cb;
}

export default open;