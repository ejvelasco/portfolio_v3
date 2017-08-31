const menuToggle = document.getElementById('menu-toggle');
let clicked = false;
const menu = document.getElementById('menu');
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
		menu.style.marginLeft = '0%';
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
		menu.style.marginLeft = '-100%';
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