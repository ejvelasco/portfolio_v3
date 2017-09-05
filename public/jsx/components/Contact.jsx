import React from 'react';

function Contact() {
	return (
		<div id='contact' className='tab'>
			<div className='tab-bar'>
				<div className='icon red'></div>
				<div className='icon yellow'></div>
				<div className='icon green'></div>
			</div>
			<div className='contact-content'>
				<p className='contact-heading'> Let's build something</p>
				<form>
				<input placeholder='Name'></input>
				<input placeholder='Email'></input>
				<textarea placeholder='Message' rows='8'></textarea>
				</form>
				<div className='button'>Send</div>
			</div>
		</div>
	);
}

export default Contact;