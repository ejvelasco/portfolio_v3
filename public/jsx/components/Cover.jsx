import React from 'react';
import socialItems from '../../js/socialItems';
import open from '../../js/open';

function toSocialIcon(item, i) {
	return (
		<div className='icon-container' key={i}>
			<i className={`fa fa-${item['name']}-square fa-3x`} onClick={open(item['url'])}></i>
		</div>
	);
}

function Cover(){
	const socialIcons = socialItems.map((item, i) => toSocialIcon(item, i));
	return (
			<div id='cover'>
				<div className='social'>
					{socialIcons}
				</div>
				<div className='heading-container rellax' data-rellax-speed='-7'>
					<p className='heading' >eduardo velasco</p>
					<p id ='greeting' className='greeting'>Welcome to my portfolio.</p>
				</div>
			</div>
	);
}

export default Cover;