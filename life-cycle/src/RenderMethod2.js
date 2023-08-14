// when state is update then our render method is also update

import React from 'react';

class Users extends React.Component{
	constructor(){
		super();
		this.state={
			email:"dolatjangir0@gmail"
		}
	}
	render(){
		console.warn("render",this.state.email)
		return(

			<div>

			<h1>hello {this.state.email} </h1>
			<button onClick={()=>this.setState({email:"dolatjangir778@gmail"})}>change email</button>
			</div>
			)
	}
}

export default Users;