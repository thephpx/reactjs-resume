import React from 'react'

function Contact(props)
{
	if(props.resume){
		const contactItems = (
			<ul>
				{
					props.resume.contact.map((item) => 
						<li key={item.type}><i className={item.icon} style={{color: '#2079c7'}}></i>&nbsp;{item.content}</li>
					)
				}
			</ul>
		);

		return (
			<div className="col-lg-4">
				<div id="contact">
					{contactItems}
				</div>
			</div>
		)		
	}

	return (
		<div className="col-lg-4"><div id="contact"></div></div>
	)
}

export default Contact