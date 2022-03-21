import './App.css';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Calendar from './components/Calendar';
import Bookings from './components/Bookings';
import Pricing from './components/Pricing';

function App() {
  return (
		<div className='App'>
			Magfit <br />
			<Nav />
			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/pricing' element={<Pricing/>}></Route>
				<Route path='/contact' element={<Contact/>}></Route>
				<Route path='/about' element={<About/>}></Route>
				<Route path='/calendar' element={<Calendar/>}></Route>
				<Route path='/bookings' element={<Bookings/>}></Route>
			</Routes>
		</div>
	);
}

export default App;
