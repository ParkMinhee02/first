import React, { useState } from 'react';
import './Event.css'
import bg from './img/moutains-9025523_640.jpg'

const Event = () => {
	const[isConfirmed, setIsConfirmed] = useState(false);
	const handleConfirm = () => {
		setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
	};
	return (
		<div>
			<button onClick={handleConfirm} disabled={isConfirmed}>
				{isConfirmed ? "확인됨" : "확인하기"}
			</button>
			<div className='main-bg' style={{backgroundImage: 'url('+bg+')'}}></div>
		</div>
	);
};

export default Event;