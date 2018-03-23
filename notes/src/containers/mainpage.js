import React, { Component } from 'react';
import TextArea from '../components/textarea'
import styles from './mainpage.css'

class MainPage extends Component{
	state = {
		posts: [{
			title: "Tempor laborum eu laboris ullamco.",
			body: "Ex elit laboris dolor irure in cupidatat esse aute dolore occaecat sit sunt reprehenderit sit in sed veniam cupidatat in.",
			time: null,
			tags:['new','killer'],
			id:null
		}]
	}

	textareaClickHandler = (e) =>{
		// console.log(e)
		e.target.rows = 4;
	}
	textareaChangeHandler = (e) => {
		console.log(e.target.rows)
		const copy = {...this.state}
		copy.posts[0].title = e.target.value;
		this.setState({
			copy
		})
		// console.log(this.state.posts[0].title)

		// resize the textArea dynamically

	}


	render(){
		return(
			<div className="_mainPage">
				<TextArea 
				something = {this.state.posts}
				click={this.textareaClickHandler}
				getValue = {this.textareaChangeHandler}
				body = {this.state.posts[0].title}
				></TextArea>
			</div>
		)
	}
}

export default MainPage;