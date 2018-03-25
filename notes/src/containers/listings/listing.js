// this container will get data from the local/cloud database and pass it on as lists to its children who will then take it and sort it(this can be done here or in the children) and display it

import React, { Component } from 'react';
// import Pinned from '../../components/pinned/pinned';
// import Recent from '../../components/recent/recent';
import Cards from '../../components/cards/cards';

class Listing extends Component {
	state = {};

	render(){
		console.log(this.props.data);
		// let cards = null;
		// loop through cards
		//recent cards
		let recent_cards = (
			<div>
				{this.props.data.map((post)=>{
					if (!post.pinned){	
						return <Cards
						title={post.title}
						body={post.body}
						key={post.id}></Cards>
					}
				})}
			</div>
		)

		//pinned cards
		let pinned_cards = (
			<div>
				{this.props.data.map((post)=>{
					if (post.pinned){	
						return <Cards
						title={post.title}
						body={post.body}
						key={post.id}></Cards>
					}
				})}
			</div>
		)

		//final output
		return(
			<div>
				<span>Pinned</span>
				{pinned_cards}
				<span>Recent</span>
				{recent_cards}
			</div>
		);
	};
};

// Listing.greet = "bello"

export default Listing;