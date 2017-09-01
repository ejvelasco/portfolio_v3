import React from 'react';

function Menu() {
	return (
		<div id='menu'>
			<ul>
				<li><a data-scroll href="#cover" className='menu-link'>Home</a></li>
				<li><a data-scroll href="#projects" className='menu-link'>Projects</a></li>
				<li><a data-scroll href="#about" className='menu-link'>About</a></li>
				<li><a data-scroll href="#contact" className='menu-link'>Contact</a></li>
			</ul>
		</div>
	);
}

export default Menu;
