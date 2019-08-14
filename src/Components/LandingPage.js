import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Ronny from '../Ronny.jpg';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
            	<Grid className="landing-grid">
            		<Cell col={12}>
            			<img 
            			  src={Ronny}
            			  alt="Ronny"
            			  className="profile"
            			  />
            			<div className="banner-text">
            			  <h1>Full Stack Web Developer Student</h1>

            			  <hr/>
            			  <p>HTML/CSS | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
            			  <div className="social-links">	

            			  	
            			  	
            			    <a href="http://lindedin.com" rel="noopener noreferrer" target="_blank">
            			      <i className="fa fa-linkedin-square" aria-hidden="true" />
            			    </a>

            			   
            			    <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            			      <i className="fa fa-github-square" aria-hidden="true" />
            			    </a>

            			    
            			    <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
            			      <i className="fa fa-twitter-square" aria-hidden="true" />
            			    </a>

            			    
            			    <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            			      <i className="fa fa-youtube-square" aria-hidden="true" />
            			    </a>

            			  </div>
            			</div>  
            		</Cell>
				</Grid>
			</div>
        )
    }
}

export default Landing;