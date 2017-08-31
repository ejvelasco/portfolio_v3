import React from 'react';

function MenuToggle() {
	return (
		<span id='menu-toggle'> 
			<div className='bar-container'>
				<span className='bar short'></span>
				<span className='bar'></span>
				<span className='bar short'></span>
				<span className='bar transparent'></span>
			</div>
		</span>
	); 
}

export default MenuToggle;
