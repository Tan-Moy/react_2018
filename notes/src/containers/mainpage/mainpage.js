import React, { Component } from 'react';
import BodyArea from '../../components/bodyarea/bodyarea'
import TitleArea from '../../components/titlearea/titlearea'
import Tags from '../../components/tags/tags'
import styles from './mainpage.css'

class MainPage extends Component{
	state = {
		posts: [{
			title: "Tempor laborum eu laboris ullamco.",
			body: "Ex elit laboris dolor irure in cupidatat esse aute dolore occaecat sit sunt reprehenderit sit in sed veniam cupidatat in.",
			time: null,
			tags: ['new','killer'],
			id: 0,
			pinned: true
		},{
			title: "Non sint mollit esse.",
			body: "Sunt consequat aliqua velit reprehenderit reprehenderit velit est dolor ex cillum irure nisi proident amet amet irure do cupidatat non ut ut velit fugiat laboris amet cillum sed qui.",
			time: null,
			tags:['shark','new'],
			id:1,
			pinned: false
		}],

		body_area_height: 3,
		title_area_height:3,

		tag_display:'hidden',
		title_display: 'hidden'
	}


	ChangeHandler = (e) => {
		let oldbodyheight = this.state.body_area_height;
		let oldtitleheight = this.state.title_area_height;
		// console.log('changed value',e.target.value)
		
		if(e.target.name === 'bodyarea'){
			// console.log("changed the value of: ",e.target)
			newPost.title = e.target.value; //good spot
			if (e.target.scrollHeight > e.target.clientHeight){
				this.setState({body_area_height:oldbodyheight + 1});
			}
		} else if(e.target.name === 'titlearea'){
			if (e.target.scrollHeight > e.target.clientHeight){
				// console.log("a wild scrollbar appeared on title")
				this.setState({title_area_height:oldtitleheight+ 1})
			} else if(e.target.type === 'text'){
				console.log("changed the value of: ",e.target.type)
			}
		}
		// to do
		// figure out how to make the text area shrink as text is deleted
	}



	focusGainHandler = (e) => {
		if (this.state.body_area_height < 5 ){	
			this.setState({body_area_height:5});
		};
		this.setState({title_display:'visible'});
		this.setState({tag_display:'visible'});

		// this.setState({body_area_height:2})
		// console.log(e.currentTarget);

		// if(e.target.name !== 'titlearea' && e.target.name !== 'bodyarea'){
		// 	console.log('the title area is hidden')
		// }
		// console.log('I got focus');
		// console.log(newPost)
		// to do 
		// hide the title bar

		// save the note on focus lost
	}

	focusLostHandler = (e) => {
		// console.log('lost focus');
		this.setState({body_area_height:3});
		if (!e.currentTarget.contains(e.relatedTarget)) {
			this.setState({title_display:'hidden'});
			this.setState({tag_display:'hidden'});
    	}
  		// console.log("relatedTarget:", e.relatedTarget)
	}

	render(){
		return(
			<div className={styles._mainPage} id="fly">
				<div 
				className={styles._flyout} 
				onClick={this.flyoutClickHandler} 
				onFocus={this.focusGainHandler}
				onBlur={this.focusLostHandler}
				>
					<TitleArea 
					 display = {this.state.title_display}
					 height={this.state.title_area_height}
					 onchange = {this.ChangeHandler}
					></TitleArea>

					<BodyArea 
					 something = {this.state.posts}
					 onchange = {this.ChangeHandler}
					 body = {this.state.posts[0].title}
					 height={this.state.body_area_height}
					 ></BodyArea>

					 <Tags
					 data = {this.state.posts}
					 onchange = {this.ChangeHandler}
					 display = {this.state.tag_display}
					 ></Tags>
				</div>
			</div>
		)
	}
}

//this is what will be updated on clicking the save button or on focus lost
let newPost = {
		title: "",
		body: "",
		time: null,
		tags:[],
		id: null
	} //putting it in he middle of a class is not allowed

export default MainPage;