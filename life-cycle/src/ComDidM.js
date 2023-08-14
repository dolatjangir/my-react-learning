// ComponentDidMount does not work state and props 
// when our code will re-render then ComponentDidMount did not update

import React from 'react';

class Mount extends React.Component
{
	constructor()
	{
		super();
		console.warn("constructor")
		this.state={
			name:"dolat"
		}
	}

	componentDidMount(){
		console.warn("ComponentDidMount")
	}

	render(){
		console.warn("render")
		
		return(
			<div>
			<h1>ComponentDidMount and name is{this.state.name}</h1>
			<button onClick={()=>this.setState({name:"dolat jangir"})}>update name</button>
			{/*when we click on update name button then our code will re-render and our componentDidMount will not re-render,when our application will mounting then componentDidMount will render*/}
			</div>
			);
	}
}

export default Mount;