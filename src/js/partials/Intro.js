import React from 'react'

function Intro(props)
{
	if(props.resume){
		return (
			<div className="col-lg-8">
				<div id="intro">
					<h1>{props.resume.name}</h1>
					<p>{props.resume.about}</p>
				</div>
			</div>
		)
	}

	return (
		<div className="col-lg-8"><div id="intro"><h1></h1><p></p></div></div>
	)
}

export default Intro