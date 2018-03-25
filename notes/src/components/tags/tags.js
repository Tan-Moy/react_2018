import React from 'react';
import styles from './tags.css'

const Tags = (props) => {
	console.log(props.display)
	let tags = [];
	props.data.map((items) =>{
		tags = [...new Set([...items.tags,...tags])]
		return tags
		// console.log(items.tags)
	})
	console.log(tags)
	return(
		<span>
			<input type="text"
			id='_tagArea'
			placeholder="Enter tags here, separate by space" 
			list="data" 
			onChange={props.onchange}
			style={{visibility: props.display}} />

            <datalist id="data">
                {tags.map((item) =>
                    <option key={item} value={item} />
                )}
            </datalist>
		</span>
	)
}

export default Tags;

