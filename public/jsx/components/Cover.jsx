import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

function Cover(){
	return (
		<div>
			<span id='menu-toggle'> 
				<div className='bar-container'>
					<span className='bar short'></span>
					<span className='bar'></span>
					<span className='bar short'></span>
					<span className='bar transparent'></span>
				</div>
			</span>
			<div id='menu'>
				<ul>
					<li><a data-scroll href="#cover">Home</a></li>
					<li><a data-scroll href="#controlled-carousel">Projects</a></li>
					<li>About Me</li>
				</ul>
			</div>
			<div id='cover'>
				<p className='logo rellax'> EV </p>
				<div className='heading-container rellax' data-rellax-speed='-9'>
					<p className='heading' >eduardo velasco</p>
					<p className='greeting'>Welcome to my portfolio.</p>
				</div>
			</div>
		</div>
	);
}

export default Cover;