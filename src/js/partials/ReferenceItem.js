import React from 'react'

function ReferenceItem(props)
{
	if(props.item.name)
	{
		return ( 	
			<div className="reference">
				<strong>{props.item.name}</strong><br/>
				<i>{props.item.designation}</i><br/>
				<span>{props.item.organization}</span><br/>
				<span><strong>Email:&nbsp;</strong>{props.item.email}</span>
			</div>
		)		
	}

	return null
}

export default ReferenceItem