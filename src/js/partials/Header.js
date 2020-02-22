import React from 'react'

import Intro from './Intro'
import Contact from './Contact'
import Certification from './Certification'

function Header(props)
{
	if(props.resume){
		return (
			<div className="row" id="resume-header">
				<Intro resume={props.resume}/>
				<Contact resume={props.resume}/>
			</div>
		)		
	}

	return (
		<div className="row" id="resume-header"></div>
	)
}

export default Header