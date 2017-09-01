import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import projectItems from '../../js/projectItems';

function toThumb(item, i) {
	return (
		<Col xs={10} sm={10} md={6} key={i}>
			<Thumbnail src={item['img']} alt="242x200">
			  <h3>{item['title']}</h3>
			  <p>{item['subtitle']}</p>
			</Thumbnail>
		</Col>
	);
}

function toRow(items, i) {
	return (
		<Row key={i}>
			{items}
		</Row>
	);
}

function ProjectGrid() {
	const projectRows = [];
	let row = [];
	const projectThumbs = projectItems.map((item, i) => toThumb(item, i));
	projectThumbs.forEach((thumb, i) => {
		const j = i + 1;
		row.push(thumb);
		if ((j % 3) === 0 || j === projectThumbs.length) {
			projectRows.push(row);
			row = [];
		}
	});
	return (
		<Grid id='grid'>
			{projectRows}
		</Grid>
	);
}

export default ProjectGrid;