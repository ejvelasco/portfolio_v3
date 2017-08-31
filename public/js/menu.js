function onMouseEnter(event, shortBars) {
	function cb(event) {
		Object.keys(shortBars).forEach(() => {
			shortBars[0]['className'] = 'bar'; 
		});
	}
	return cb;
}

function onMouseLeave(event, menu, bars) {
	function cb(event) {
		const clicked = menu.style.marginLeft === '0%';
		if (!clicked) {
			Object.keys(bars).forEach((key) => {
				if (key == 0 || key == 2) {
					bars[key]['className'] = 'bar short';
				} else if (key == 1) {
					bars[key]['className'] = 'bar';
				} else if (key == 3) {
					bars[key]['className'] = 'bar transparent';	
				}
			});
		}
	}
	return cb;
}

function onClick(event, menu, bars) {
	function cb(event) {
		const clicked = menu.style.marginLeft === '0%'
		if (!clicked) {
			menu.style.marginLeft = '0%';
			Object.keys(bars).forEach((key) => {
				if (key == 0 || key == 2) {
					bars[key]['className'] = 'bar transparent';
				} else if (key == 1) {
					bars[key]['className'] = 'bar slant-left';
				} else if (key == 3) {
					bars[key]['className'] = 'bar slant-right';
				}
			});	
		} 
		else {
			menu.style.marginLeft = '-100%';
			onMouseLeave(event, menu, bars)();
		}
	}
	return cb;
}

function menu() {
	const menu = document.getElementById('menu');
	const menuToggle = document.getElementById('menu-toggle');
	const bars = document.getElementsByClassName('bar');
	const shortBars = document.getElementsByClassName('short');
	menuToggle.addEventListener('click', onClick(event, menu, bars));
	menuToggle.addEventListener('mouseenter', onMouseEnter(event, shortBars));
	menuToggle.addEventListener('mouseleave', onMouseLeave(event, menu, bars));
}

export default menu;