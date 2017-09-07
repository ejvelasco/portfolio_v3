const greetings = [
	'Welcome to my portfolio.',
	'Bienvenido a mi portafolio.',
	'欢迎来到我的投资组合',
	'Bienvenue sur mon portefeuille.',
	'.مرحبا بكم في محفظتي', 
	'Bem-vindo ao meu portfólio.',
	'добро пожаловать в мое портфолио.',
	'Willkommen in meinem Portfolio.', 
	'私のポートフォリオへようこそ。'
];

function onInterval(greetings, p) {
	function cb() {
		p.style.letterSpacing = '-10px';
		p.style.opacity = '0';
		setTimeout(onTimeout(greetings, p), 300);
	}
	return cb;
}

function onTimeout(greetings, p) {
	function cb() {
		let i = Math.floor(Math.random() * greetings.length);
		p.innerHTML = greetings[i]; 
		p.style.letterSpacing = '0px';
		p.style.opacity = '1';
	}
	return cb;
}

function greeting() {
	const greetingParagraph = document.getElementById('greeting');
	setInterval(onInterval(greetings, greetingParagraph), 4000);
}

module.exports = greeting;