import React from 'react';

const book = (props) => {
	return (
		<div>
			<h1>{`이 책의 이름은 ${props.name}이다.`}</h1>
			<h2>{`이 책은 총 ${props.page}p로 이루어져 있다.`}</h2>
		</div>
	);
};

export default book;