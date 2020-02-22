import React from 'react'
import ProjectItemHighlight from './ProjectItemHighlight'

function ProjectItem(props)
{
	if(props.item.highlights)
	{
		const ItemHighlights = props.item.highlights.map(highlight => <ProjectItemHighlight key={Math.random()} item={ highlight }/>)

		return ( 	
			<div className="project">
				<div key={props.item.link} className="project-header">
					<h3>
						<strong>{props.item.name}</strong>&nbsp;					    
					</h3>
					<div className="link">
						<a target="_blank" href={props.item.link} alt={props.item.name}>{props.item.link}</a>
					</div>
					<div className="project-body">
						<ul>
						{ ItemHighlights }
						</ul>
					</div>					
				</div>
			</div>
		)		
	}
	return null
}

export default ProjectItem