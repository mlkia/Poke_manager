import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
function TheNavbar() {

	return(
		<div>
			<section className='navbar'>
				<ul>
				<NavLink to="/"><li>Home</li></NavLink>
					
					<NavLink to="/myteam"><li>My Team</li></NavLink>
					<li>About</li>
				</ul>
			</section>
		</div>
	)
}

export default TheNavbar