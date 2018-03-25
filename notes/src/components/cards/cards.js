import React from 'react'

const Cards = (props) => {
	console.log(props)
	return(
		<div>
			<span>Title: {props.title}</span><br/>
			<span>Body: {props.body}</span>
		</div>
	)
}

export default Cards;