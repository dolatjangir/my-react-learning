// ComponentDidIUpdate is work on state and props and componentDidUpdate also take preProps,preState,snapshot  
// when our code will re-render when click on button  then ComponentDidUpdate will  updated

import React from 'react';

class Update extends React.Component
{
	constructor()
	{
		super();
		console.warn("constructor")
		this.state={
			count:0
		}
	}

	componentDidUpdate(preState,preProps,snapshot){
		console.warn("componentDidUpdate",preState.count,this.state.count)
		// when you want 10 times automatic call 
		if(this.state.count<10){
		this.setState({count:this.state.count+1})

		}
	}


	
	render(){
		// console.warn("render")
		
		return(
			<div>
				<h1>ComponentDidMount and counter is{this.state.count}</h1>
				<button onClick={()=>this.setState({count:1})}>update name</button>
				{/*when we click on update name button then our code will re-render and our componentDidMount will not re-render,when our application will mounting then componentDidMount will render*/}
			</div>
			);
	}
}

export default Update;