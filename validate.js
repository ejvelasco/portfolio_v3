function validate(details) {
	const re = {
		name: /^[a-zA-Z ]+$/,
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		msg: /\S+/
	};
	let error;
	const invalid = Object.keys(details).some(key => {
		const hasError = !re[key].test(details[key]);
		if (hasError === true) {
			error = {error: key};
		}
		return hasError; 
	});
	return [invalid, error];
}

module.exports = validate;