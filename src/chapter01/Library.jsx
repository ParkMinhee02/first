import React from 'react';
import Book from './Book';

const Library = (props) => {
	return (
		<div>
			<Book name="리액트" page={300}></Book>
			<Book name="뷰" page={200}></Book>
		</div>
	);
};

export default Library;