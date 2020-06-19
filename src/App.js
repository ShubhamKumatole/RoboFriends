import React from "react";
import {robots} from './robots';
import CardList from './CardList';
import SearchField from './SearchField';
import './App.css'


class App extends React.Component {
	constructor(){
		super();
		this.state ={
			robots: robots,
			searchField: '',
		}
	}
	searchChange = (event)=>{
		this.setState({searchField:event.target.value});
	} 
	render(){
		const filterRobots = this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchField searchChg={this.searchChange}/>
				<CardList robots={filterRobots} />
			</div>
			);
	}
}

export default App;