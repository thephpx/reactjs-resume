import React from 'react'
import ExperienceItem from './ExperienceItem'

function Experience(props)
{
	if(props.resume.experience){
		const experienceItems = props.resume.experience.map((item) => <ExperienceItem key={Math.random()} item={item} />)

		return (
			<div id="experiences">
				<h2 className="section-header">Professional Experience</h2>
				{ experienceItems }
			</div>
		)		
	}


	return null
}

export default Experience