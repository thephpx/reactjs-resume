import React from 'react'
import ProjectItem from './ProjectItem'

function Projects(props)
{
	if(props.resume.projects){

		const projectItems = props.resume.projects.map(project => <ProjectItem key={project.link} item={project} />)

		return (
			<div id="projects">
				<h2 className="section-header">Recent Projects</h2>
				{projectItems}
			</div>
		)		
	}

	return null
}

export default Projects