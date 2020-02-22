import React from 'react'
import Header from './partials/Header'
import ResumeBody from './partials/ResumeBody'

class ResumeApp extends React.Component{
	constructor(props){
		super(props);
		this.state = { resume : null }
	}
	componentDidMount(){
		fetch('/resume.json',{
	      headers : { 
	        'Content-Type': 'application/json',
	        'Accept': 'application/json'
	       }

	    })
		.then((response) => {
			return response.json();
		})
		.then((jsondata) => {
			this.setState({ resume: jsondata });
		});
	}
	render(){
	  return(
	  	<div className="container">
	  		<Header resume={this.state.resume}/>
	  		<ResumeBody resume={this.state.resume}/>
	  	</div>
	  );
	}
}

export default ResumeApp;