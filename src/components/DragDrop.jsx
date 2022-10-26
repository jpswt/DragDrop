import React, { useState } from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';

import '../App.css';

const pics = [
	{
		id: 1,
		url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80',
	},
	{
		id: 2,
		url: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80',
	},
	{
		id: 3,
		url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
];

function DragDrop() {
	const [board, setBoard] = useState([]);

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'image',
		drop: (item) => addImageToBoard(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const addImageToBoard = (id) => {
		console.log(id);
		const picList = pics.filter((picture) => id === picture.id);
		setBoard((board) => [...board, picList[0]]);
	};

	return (
		<>
			<div className="pictures">
				{pics.map((picture) => {
					return <Picture url={picture.url} id={picture.id} />;
				})}
			</div>
			<div className="board" ref={drop}>
				{board.map((picture) => {
					return <Picture url={picture.url} id={picture.id} />;
				})}
			</div>
		</>
	);
}

export default DragDrop;
