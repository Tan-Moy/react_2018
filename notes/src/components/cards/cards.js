import React from 'react';
import styles from './cards.css'

const Cards = (props) => {
	// console.log(props)
	return(
		<div>
			<span>Title: {props.title}</span><br/>
			<span>Body: {props.body}</span>
			<button onClick = {(e)=>props.click('delete',props,e)}
			>delete</button>
			<button onClick = {(e)=>props.click('edit',props,e)}
			>edit</button>
		</div>
	)
}

export default Cards;
// {(e) => this.clickHandler("button",e)}