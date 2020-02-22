import React from 'react'
import EducationItem from './EducationItem'

function Education(props)
{
	if(props.resume.academic){
		const academicItems = props.resume.academic.map((item) => <EducationItem key={Math.random()} item={item}/>)

		return (
			<div id="educations">
				<h2 className="section-header">Academic Background</h2>
				{academicItems}
			</div>
		)		
	}


	return (
		<div className="education"></div>
	)
}

export default Education