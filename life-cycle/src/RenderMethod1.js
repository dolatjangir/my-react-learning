// when props is update then our render method is also update

import React from 'react';

class User extends React.Component{
	render(){
		console.warn("render",this.props)
		return(

			<div>

			<h1>hello {this.props.name}</h1>
			</div>
			)
	}
}

export default User;