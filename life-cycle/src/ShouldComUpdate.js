 // ShouldComponentUpdate can stop rendring and it can work on state and props
 // when our code will re-render then ComponentDidMount did not update

import React from 'react';

class ShouldComUpdate extends React.Component
{
	constructor()
	{
		super();
		console.warn("constructor")
		this.state={
			count:0
		}
	}

	// note:-- shouldComponentUpdate is take only boolan value

	shouldComponentUpdate(){
		console.warn("shouldComponentUpdate",this.state.count);
		return true;
	}
	render(){
		// console.warn("render")
		
		return(
			<div>
				<h1>ComponentDidMount and counter is{this.state.count}</h1>
				<button onClick={()=>this.setState({count:this.state.count+1})}>update name</button>
				{/*when we click on update name button then our code will re-render and our componentDidMount will not re-render,when our application will mounting then componentDidMount will render*/}
			</div>
			);
	}

}

export default ShouldComUpdate;