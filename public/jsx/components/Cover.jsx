import React from 'react';

function Cover(){
	return (
			<div id='cover'>
				<div className='social'>
					<i className="fa fa-facebook-square fa-3x"></i>
					<i className="fa fa-github-square fa-3x"></i>
					<i className="fa fa-linkedin-square fa-3x"></i>
				</div>
				<div className='heading-container rellax' data-rellax-speed='-7'>
					<p className='heading' >eduardo velasco</p>
					<p id ='greeting' className='greeting'>Welcome to my portfolio.</p>
				</div>
			</div>
	);
}

export default Cover;