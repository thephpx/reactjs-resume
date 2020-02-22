import React from 'react'

import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import Certification from './Certification'
import Reference from './Reference'

function ResumeBody(props)
{
	if(props.resume){
		return (
			<div className="row" id="resume-body">
				<div className="col-lg-8">
					<Projects resume={props.resume}/>
					<Experience resume={props.resume}/>
					<Education resume={props.resume}/>
					<Certification resume={props.resume}/>
				</div>
				<div className="col-lg-4">
					<Reference resume={props.resume}/>
				</div>
			</div>
		)		
	}

	return (
		<div className="row" id="resume-body"></div>
	)
}

export default ResumeBody