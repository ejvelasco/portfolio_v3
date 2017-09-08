function showError(item) {
	const sendButton = document.getElementById('sendButton');
	sendButton.innerHTML = 'send';
	const error = document.getElementById('error');
	const msg = document.createElement('p');
	const icon = document.createElement('span');
	icon.classList.add('glyphicon');
	icon.classList.add('glyphicon-exclamation-sign');
	msg.innerHTML = `Please enter a valid ${item.error}.`;
	error.innerHTML = '';
	error.appendChild(icon);
	error.appendChild(msg);
	error.style.display = 'block';
	setTimeout(() => {
		error.style.display = 'none';
	}, 3000);
}

function send(event) {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const msg = document.getElementById('msg');
	const sendButton = document.getElementById('sendButton');
	if (sendButton.innerHTML === 'thank you') {
		return;
	}
	const details = {
		name: name.value,
		email: email.value, 
		msg: msg.value
	}
	const re = {
		name: /^[a-zA-Z ]+$/,
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		msg: /\S+/
	};
	const invalid = Object.keys(details).some(key => {
		const hasError = !re[key].test(details[key]);
		if (hasError === true) {
			showError({error: key});
		}
		return hasError; 
	});
	if (invalid) {
		return;
	}
	event.currentTarget.innerHTML = 'sending...';
	const http = new XMLHttpRequest();
	const url = '/send';
	http.open('POST', url, true);
	http.setRequestHeader('Content-type', 'application/json');
	http.onreadystatechange = () => {
		if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
			const errorItem = JSON.parse(http.responseText);
			if (errorItem.error) { 
				showError(errorItem);
			} else {
				sendButton.innerHTML = 'thank you';
			}
		} else if (http.readyState === XMLHttpRequest.DONE) {
			console.log('error connecting to server');
		}
	}
	http.send(JSON.stringify(details));
}

export default send;
