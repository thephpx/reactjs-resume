import React from 'react'

function EducationItem(props)
{
	if(props.item)
	{
		return ( 	
			<div className="education">
				<div key={Math.random()} className="education-header">
					<h3>
						<strong>{props.item.title}</strong>
					</h3>
					<h6>
						<i>{props.item.institute}</i>,&nbsp;{props.item.year}
					</h6>
				</div>
			</div>
		)		
	}

	return null
}

export default EducationItem