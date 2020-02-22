import React from 'react'

function CertificationItem(props)
{
	if(props.item.title)
	{
		return ( 	
			<div className="certificate">
				<div key={props.item.link} className="certificate-header">
					<h3>
						<strong>{props.item.title}</strong>
					</h3>
					<div className="duration">
						<i>{props.item.institute}</i>						
					</div>
					<div className="link">
						<a target="_blank" href={props.item.link} alt={props.item.title}>{props.item.link}</a>
					</div>
				</div>
			</div>
		)		
	}
	return null
}

export default CertificationItem