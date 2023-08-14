import React from 'react';

class ComponentDidUnmount extends React.Component
{

	componentWillUnmount(){
	console.warn("componentWillUnmount called")
	}

	render(){
		return(
			<div className="unmount">
		<h1>student Component</h1>  
			</div>
			)
	}
}


export default ComponentDidUnmount;