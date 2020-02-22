import React from 'react'
import CertificationItem from './CertificationItem'

function Certification(props)
{
	if(props.resume.certifications){
		const certificationItems = props.resume.certifications.map((item) => <CertificationItem key={Math.random()} item={ item }/>)

		return (
			<div id="certifications">
				<h2 className="section-header">Professional Certifications</h2>
				{certificationItems}
			</div>
		)		
	}


	return null
}

export default Certification