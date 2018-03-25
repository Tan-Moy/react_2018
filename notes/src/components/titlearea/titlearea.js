import React from 'react';
import styles from './titlearea.css'

const TitleArea = (props) => {
	console.log(props.height);
	const updatedStyles = {
		'visibility': props.display,
		'height': props.height + "em"
	}
	return(
		<div className="container-fluid">
			<div className="row">
				<textarea 
				id={styles._newtitleArea} 
				className = 'form-control' 
				placeholder="Enter a title"
				name="titlearea"
				style = {updatedStyles}
				onChange={props.onchange} 
				></textarea>
			</div>
		</div>
	)
}

export default TitleArea;