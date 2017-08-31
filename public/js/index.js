import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import menu from './menu';
import cover from './cover';
import projects from './projects';
import projectItems from './projectItems';

document.addEventListener("DOMContentLoaded", (event) => { 
	const rellax = new Rellax('.rellax');
	const scroll = new SmoothScroll('a[href*="#"]');
	menu();
	cover();
	projects();
});