import React, { Component } from 'react';
import BodyArea from '../components/bodyarea'
import styles from './mainpage.css'

class MainPage extends Component{
	state = {
		posts: [{
			title: "Tempor laborum eu laboris ullamco.",
			body: "Ex elit laboris dolor irure in cupidatat esse aute dolore occaecat sit sunt reprehenderit sit in sed veniam cupidatat in.",
			time: null,
			tags:['new','killer'],
			id:null
		}],

		body_area_height: 2,
		title_display: 'hidden'
	}

	bodyAreaClickHandler = (e) => {
		// console.log(e)
		if (this.state.body_area_height < 5 ){	
			this.setState({body_area_height:5})
		}
		this.setState({title_display:'visible'})
	}


	bodyAreaChangeHandler = (e) => {
		// console.log(e.target.rows)
		const copy = {...this.state}
		copy.posts[0].title = e.target.value;
		this.setState({
			copy
		})
		let oldheight = this.state.body_area_height;
		// console.log(this.state.posts[0].title)

		// resize the bodyArea dynamically
		if (e.target.scrollHeight > e.target.clientHeight){
			console.log("a wild scrollbar appeared")
			this.setState({body_area_height:oldheight + 1})	
		}
		
	}


	focuslostHandler = (e) => {
		this.setState({body_area_height:2})
		console.log('focus lost');

		// to do 
		// hide the title bar

		// save the note on focus lost
	}


	render(){
		return(
			<div className={styles._mainPage}>
				<BodyArea 
				something = {this.state.posts}
				click={this.bodyAreaClickHandler}
				onchange = {this.textareaChangeHandler}
				body = {this.state.posts[0].title}
				height={this.state.body_area_height}
				onblur = {this.focuslostHandler}
				></BodyArea>
			</div>
		)
	}
}

export default MainPage;