import React from 'react';
import ComponentDidUnmount from "./CompDidUnmountdupl.js";
class Unmount extends React.Component{


	constructor(){
		super();

		this.state={
			show:true
		}
	}

	render(){
		return(
			<div className="unmount">
			<h1>ComponentDidMount,,,,dolat jangir</h1>
			{
				this.state.show ? <ComponentDidUnmount/> : <h1>toggle child is removed</h1>
			}
			<button onClick={()=>this.setState({show:!this.state.show})}>toggle child Component</button>
			</div>
			)
	}
}

export default Unmount;