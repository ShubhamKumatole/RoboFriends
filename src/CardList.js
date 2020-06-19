import Card from './Card';
import React from 'react';


const CardList = ({robots})=>{
	return (
		robots.map((user,i)=>(<Card 
				key={i} 
				name={robots[i].name} 
				email={robots[i].email} 
				id={robots[i].id} />)
			)
	)
}

export default CardList;