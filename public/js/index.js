import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import menu from './menu';
import greeting from './greeting';
import cover from './cover';
import projects from './projects';

document.addEventListener("DOMContentLoaded", (event) => { 
	const rellax = new Rellax('.rellax');
	const scroll = new SmoothScroll('a[href*="#"]');
	menu();
	greeting();
});