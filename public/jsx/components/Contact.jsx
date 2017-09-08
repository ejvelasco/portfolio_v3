import React from 'react';
import send from '../../js/send';
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
				<input placeholder='Name' id='name'></input>
				<input placeholder='Email' id='email'></input>
				<textarea placeholder='Message' rows='8' id='msg'></textarea>
				</form>
				<p id='error'></p>
				<div className='button' id='sendButton' onClick={send}>Send</div>
			</div>
		</div>
	);
}

export default Contact;