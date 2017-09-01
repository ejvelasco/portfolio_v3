import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import menu from './menu';
import cover from './cover';
import projects from './projects';

document.addEventListener("DOMContentLoaded", (event) => { 
	const rellax = new Rellax('.rellax');
	const scroll = new SmoothScroll('a[href*="#"]');
	AOS.init();
	menu();
	cover();
	projects();

});