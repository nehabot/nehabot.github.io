import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
// import './App.css';
import NavBar from './components/navbar';
import Main from './components/main';
class App extends Component {
	render(){
		return (
			<div>
				<NavBar />
				<Main />
			</div>

		);
	}
}

// const AppTest = () => (

// 	<div>
// 		<HashRouter>
// 			<NavBar />
// 			<Main />
// 		</HashRouter>
// 	</div>
// )

export default App;
