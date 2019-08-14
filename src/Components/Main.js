import React from 'react';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import Projects from './Projects';
import Resume from './Resume';

import { Switch, Route } from "react-router-dom";

const Main = () => (
	<Switch>

	  <Route exact path="/" component={LandingPage} />
	  <Route  path="/aboutme" component={AboutMe} />
	  <Route  path="/contacts" component={Contacts} />
	  <Route  path="/projects" component={Projects} />
	  <Route  path="/resume" component={Resume} />

	</Switch>  
)

export default Main;