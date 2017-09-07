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

function onTimeout(greetings, p, j) {
	function cb() {
		const N = greetings.length;
		let i = Math.floor(Math.random() * N);
		p.innerHTML = (p.innerHTML === greetings[i]) ? greetings[(i+1) % N] : greetings[i]; 
		p.style.letterSpacing = '0px';
		p.style.opacity = '1';
		j = i;
	}
	return cb;
}

function greeting() {
	const greetingParagraph = document.getElementById('greeting');
	let j = 0;
	setInterval(onInterval(greetings, greetingParagraph), 4000);
}

module.exports = greeting;