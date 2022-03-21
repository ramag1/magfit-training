import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <div>
			<ul>
				<Link to='/' element='Home'>Home</Link>
				<Link to='/calendar' element='Calendar'>Calendar</Link>
				<Link to='/pricing' element='Pricing'>Pricing</Link>
				<Link to='/bookings' element='Bookings'>Bookings</Link>
				<Link to='/contact' element='Contact'>Contact</Link>
				<Link to='/about' element='About'>About</Link>
			</ul>
        </div>
	);
}

export default Nav;