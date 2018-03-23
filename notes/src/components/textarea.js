import React from 'react';

const TextArea = (props) => {
	console.log();
	return(
		<div className="container-fluid">
			<div className="row">
				<textarea name="" rows='1' id="_newNoteArea" onChange={props.getValue} onClick={props.click}></textarea>
			</div>
		</div>
	)
}

export default TextArea;