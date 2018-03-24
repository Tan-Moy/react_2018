import React from 'react';

const TitleArea = (props) => {
	console.log(props.height);
	return(
		<div className="container-fluid">
			<div className="row">
				<textarea className = 'form-control' name=""></textarea>
			</div>
		</div>
	)
}

export default TitleArea;