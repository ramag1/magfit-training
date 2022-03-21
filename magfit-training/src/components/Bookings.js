import React from 'react';
import {Link} from 'react-router-dom';

function Bookings(props) {
    return (
			<div>
				All bookings are managed through Mindbody Online. Please visit the link below to review pricing, packages and secure a spot for class. <br/>
				<a
					 href= 'https://www.mindbodyonline.com/explore/locations/magfit-training' target='_blank'>
					MAGFIT
				</a>
			</div>
		);
}

export default Bookings;