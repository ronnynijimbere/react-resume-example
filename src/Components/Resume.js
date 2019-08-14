import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Ronny from '../Ronny.jpg';

class Resume extends Component {
    render() {
        return (
            <div>
				<Grid>
					<Cell col={4}>
					<div style={{textAlign: 'center'}}>
					<img 
            			  src={Ronny}
            			  alt="Ronny"
            			  className="profile"
            			  />
					</div>

					<h2 style={{paddingTop: '2em'}}>Ronny Nijimbere</h2>
					<h4 style={{color: 'grey'}}>Programmer</h4>
					<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
					<p>Bryan Cranston played the role of Walter in Breaking Bad. 
					He is also known for playing Hal in Malcom in the Middle.</p>
					<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
					<h5>Address</h5>
					<p>87 Prospect Road, Umbilo, Durban, 4001, Kwazulu-Natal, South Africa</p>
					<h5>Phone</h5>
					<p>(+27) 799686553</p>
					<h5>Email</h5>
					<p>ronny.nijimbere86@gmail.com</p>
					<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

					</Cell>
					<Cell className="resume-right-col" col={8}>
					<h2>Education</h2>

					<Education 
					startYear= {1999}
					endYear= {2003}
					schoolName= "Sparks Estate Secondary School"
					schoolDescription= "High School"
					/>

					<Education 
					startYear= {2004}
					endYear= {2009}
					schoolName= "University of Kwazulu-Natal"
					schoolDescription= "Honors Degree: Bachelor of Social Science in Geography and Environmental Management (2008)
					: Thesis: “The Role of GIS (Geographic and Information System) in Crime Management”."
					/>

					<hr style={{borderTop: '3px solid #e22947'}} />

					<h2>Experience</h2>

					<Experience
					startYear= {2010}
					endYear= {2013}
					jobName= "Warehouse Supervisor"
					jobDescription= "Update Pegwarehouse (Warehouse Management System) of all cargo received and Dispatched.
					I also Managed the staff in the Warehouse Department (Ensure daily tasks and targets are met)
					I also ensured that inventories are Carried on SPEED (Warehouse Management System) for stock Management"


					/>

					<Experience
					startYear= {2013}
					endYear= {2014}
					jobName= "Customer Controller"
					jobDescription= "Update Warehouse team (Manager/Supervisors) all cargo that is expected to arrive on daily basisf.
					I ensure that Monthly Health and Safety Reports were done and sent to the Company's Health Manager.
					I was also responsible for maintaining good relationships with Suppliers/Clients (Client requests/Queries are met)"
					/>

					<hr style={{borderTop: '3px solid #e22947'}} />

					<h2>Skills</h2>
					
					<Skills
					skill= "Javascript"
					progress= {60}
					/>

					<Skills
					skill= "HTML/CSS"
					progress= {80}
					/>

					<Skills
					skill= "React"
					progress= {50}
					/>

					<Skills
					skill= "Node.js"
					progress= {70}
					/>

					</Cell>
				</Grid>
			</div>
        )
    }
}

export default Resume;