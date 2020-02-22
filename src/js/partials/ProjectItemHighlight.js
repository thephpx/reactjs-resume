import React from 'react'


function ProjectItemHighlight(props)
{
	if(props.item)
	{
		return ( 	
			<li>{ props.item }</li>
		)		
	}

	return null
}

export default ProjectItemHighlight