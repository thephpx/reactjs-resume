import React from 'react'
import ReferenceItem from './ReferenceItem'

function Reference(props)
{
	if(props.resume.references){
		const referenceItems = props.resume.references.map((item) => <ReferenceItem key={Math.random()} item={ item }/>)

		return (
			<div id="references">
				<h2 className="section-header">References</h2>
				{referenceItems}
			</div>
		)		
	}


	return null
}

export default Reference