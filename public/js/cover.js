import Rellax from 'rellax';
document.addEventListener("DOMContentLoaded", (event) => { 
	const rellax = new Rellax('.rellax');
	const cover = document.getElementById('cover');
	const carousel = document.getElementById('controlled-carousel');
	const menuToggle = document.getElementById('menu-toggle');
	let clicked = false;
	const margin = 200;
	const menu = document.getElementById('menu');
	cover.addEventListener('mousemove', (event) => {
		const x = Math.floor(.05 * event.clientX) - margin;
		const y = Math.floor(.05 * event.clientY) - margin;
		document.body.style.backgroundPosition = `${x}px ${y}px`;		
	});
	cover.addEventListener('mouseenter', (event) => {
		document.body.style.transition = 'background .5s ease';
		// console.log(document.body.style);
		setTimeout(() => {
			document.body.style.transition = '';
		}, 500);
	});
	menuToggle.addEventListener('mouseenter', (event) => {
		const shortBars = document.getElementsByClassName('short');
		Object.keys(shortBars).forEach(() => {
			shortBars[0]['className'] = 'bar'; 
		});
	});
	menuToggle.addEventListener('mouseleave', (event) => {
		if (!clicked) {
			const bars = document.getElementsByClassName('bar');
			Object.keys(bars).forEach((key) => {
				if (key == 0 || key == 2) {
					bars[key]['className'] = 'bar short';
				} 
				if (key == 1) {
					bars[key]['className'] = 'bar';
				}
				if (key == 3) {
					bars[key]['className'] = 'bar transparent';	
				}
			});
		}
	});
	menuToggle.addEventListener('click', (event) => {
		const bars = document.getElementsByClassName('bar');
		if (!clicked) {
			menu.className = 'expanded';
			Object.keys(bars).forEach((key) => {
				if (key == 0 || key == 2) {
					bars[key]['className'] = 'bar transparent';
				} 
				if (key == 1) {
					bars[key]['className'] = 'bar slant-left';
				}
				if (key == 3) {
					bars[key]['className'] = 'bar slant-right';
				}
			});	
		} else {
			menu.className = '';
			Object.keys(bars).forEach((key) => {
				if (key == 0 || key == 2) {
					bars[key]['className'] = 'bar short';
				} 
				if (key == 1) {
					bars[key]['className'] = 'bar';
				}
				if (key == 3) {
					bars[key]['className'] = 'bar transparent';
				}
			});
		}
		
		clicked = !clicked;
	});
});
