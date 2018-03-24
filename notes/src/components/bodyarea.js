import React from 'react';
import styles from './bodyarea.css'

const BodyArea = (props) => {
	console.log(props.height);
	return(
		<div className="container-fluid">
			<div className="row">
				<textarea name="" className = 'form-control' rows='1' id={styles._newNoteArea} style={{height: props.height + "em"}} onChange={props.onchange} onClick={props.click} onBlur = {props.onblur}></textarea>
			</div>
		</div>
	)
}

export default BodyArea;