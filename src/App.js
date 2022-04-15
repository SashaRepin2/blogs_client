import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';

function App() {
	// const AuthContext = authCon;

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
			<Header />
			<LoginPage />
		</div>
	);
}

export default App;
