import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import projectItems from '../../js/projectItems';

function toThumb(item, i) {
	return (
		<Col className='col-centered' xs={12} sm={10} md={4} key={i}>
			<Thumbnail src={item['img']} onClick={redirect(item['url'])} alt="242x200">
			  <h3>{item['title']}</h3>
			  <p>{item['subtitle']}</p>
			</Thumbnail>
		</Col>
	);
}

function redirect(url) {
	function cb() {
		window.open(url);
	}
	return cb;
}

function ProjectGrid() {
	const projectRows = [];
	let row = [];
	const projectThumbs = projectItems.map((item, i) => toThumb(item, i));
	let j = 0;
	projectThumbs.forEach((thumb, i) => {
		row.push(thumb);
	});
	projectRows.push(row);
	return (
		<Grid id='grid'>
			{projectRows}
		</Grid>
	);
}

export default ProjectGrid;