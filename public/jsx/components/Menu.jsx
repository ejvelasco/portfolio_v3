import React from 'react';

function Menu() {
	return (
		<div id='menu'>
			<ul>
				<li><a data-scroll href="#cover" className='menu-link'>Home</a></li>
				<li><a data-scroll href="#controlled-carousel" className='menu-link'>Projects</a></li>
			</ul>
		</div>
	);
}

export default Menu;
