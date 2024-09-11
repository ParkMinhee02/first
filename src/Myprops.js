import React from 'react';

const Myprops = ({name,childern}) => {
	/* const {name,childern} = props; */
	return (
		<div>
			안녕하세요 제 이름은 {name}입니다. <br />
			Childern 값은 {childern}입니다.
		</div>
	);
};
Myprops.defaultProps={
	name: '기본이름'
}

export default Myprops;