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

function onClick(event, menu, bars, screen) {
	function cb(event) {
		const clicked = menu.style.marginLeft === '0%';
		if (!clicked && event.target.getAttribute('id') !== 'screen') {
			screen.style.opacity = '.7';
			screen.style.zIndex = '9997';
			menu.style.opacity = '1';
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
			screen.style.opacity = '0';
			screen.style.zIndex = '-1';
			menu.style.marginLeft = '-120%';
			onMouseLeave(event, menu, bars)();
		}
	}
	return cb;
}
function linkOnClick(event, menu, screen, bars) {
	function cb(event) {
		screen.style.opacity = '0';
		screen.style.zIndex = '-1';
		menu.style.opacity = '0';
		menu.style.marginLeft = '-120%';
		onMouseLeave(event, menu, bars)();
	}
	return cb;
}

function menu() {
	const menu = document.getElementById('menu');
	const menuToggle = document.getElementById('menu-toggle');
	const bars = document.getElementsByClassName('bar');
	const screen = document.getElementById('screen');
	const shortBars = document.getElementsByClassName('short');
	const menuLinks = document.getElementsByClassName('menu-link');
	menuToggle.addEventListener('click', onClick(event, menu, bars, screen));
	menuToggle.addEventListener('mouseenter', onMouseEnter(event, shortBars));
	menuToggle.addEventListener('mouseleave', onMouseLeave(event, menu, bars));
	screen.addEventListener('click', onClick(event, menu, bars, screen));
	Object.keys(menuLinks).forEach((key) => {
		menuLinks[key].addEventListener('click', linkOnClick(event, menu, screen, bars));
	});
}

export default menu;