import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Ronny from '../Ronny.jpg';


class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
            	<Grid className="contact-grid">
            		<Cell col={6}>
            			<h2>Ronny Nijimbere</h2>
            			<img 
            			  src={Ronny}
            			  alt="Ronny"
            			   style={{height: '250px'}} 
            			   />
            			   <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            			   Im here to assist you with all your front and back-end issues that you are having.</p>
            		</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>

						<div className="contact-list">
						<List>
  							<ListItem>
    							<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
    							<i className="fa fa-phone-square" aria-hidden='true' />
    							(+27) 799686553
    							</ListItemContent>
  							</ListItem>

  							<ListItem>
    							<ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
    							<i className="fa fa-envelope" aria-hidden='true' />
    							ronny.nijimbere86@gmail.com
    							</ListItemContent>
  							</ListItem>

						</List>
						</div>	
					</Cell>            		
            	</Grid>
			</div>
        )
    }
}

export default Contact;