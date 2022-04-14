import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
	async function GetData() {
		let response = await fetch('http://127.0.0.1:5000/api/v1/test');

		if (response.ok) {
			let data = await response.json();
			console.log(data);
		} else {
			console.log(response.status);
		}
	}

	React.useEffect(() => {
		GetData();
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
