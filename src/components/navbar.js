import React from 'react';
import { NavLink } from 'react-router-dom';
import {browserHistory} from 'react-router';

import './styles/navbar.css';
import routes from '../routes';

export default function NavBar(props) {
	return (
		<navbar>
			<div class="navbar">
				<h2>Welcome to React Router Tutorial</h2>
				<nav>
					<ul>
						<li><NavLink exact to='/' className="navLink">Home</NavLink></li>
						<li><NavLink to='/about'>About</NavLink></li>
						<li><NavLink to='/contact'>Contact</NavLink></li>
					</ul>
				</nav>
			</div>
		</navbar>
    
	);
}