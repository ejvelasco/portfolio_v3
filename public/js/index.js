import Rellax from 'rellax';
import SmoothScroll from 'smooth-scroll';
import cover from './cover';

document.addEventListener("DOMContentLoaded", (event) => { 
	const rellax = new Rellax('.rellax');
	const scroll = new SmoothScroll('a[href*="#"]');
	cover();
});