import React from 'react'

function ExperienceItem(props)
{
	if(props.item.designation)
	{
		return ( 			
			<div className="experience">	
				<div key={props.item.link} className="experience-header">
					<h3>
						<strong>{props.item.organization}</strong>
					</h3>
					<h6>
						<i>{props.item.designation}</i>	    
					</h6>
					<div className="duration">{props.item.from}&nbsp;-&nbsp;{props.item.to}</div>
				</div>
			</div>
		)		
	}
	return null
}

export default ExperienceItem