import React from "react";
import {robots} from './robots';
import CardList from './CardList';
import SearchField from './SearchField';
import './App.css'


class App extends React.Component {
	constructor(){
		super();
		this.state ={
			robots: [],
			searchField: '',
		}
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
  			.then(robot => this.setState({robots:robot}))
	}
	searchChange = (event)=>{
		this.setState({searchField:event.target.value});
	} 
	render(){
		const filterRobots = this.state.robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		});
		if(this.state.robots.length===0){
			return <h1>Loading...</h1>
		}
		else{
			return (
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchField searchChg={this.searchChange}/>
					<CardList robots={filterRobots} />
				</div>
				);
		}
	}
}

export default App;