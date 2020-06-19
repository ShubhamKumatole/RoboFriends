import React from 'react';

const SearchField = ({SearchField,searchChg}) =>{
	return (
		<div>
			<input
			className='pa3 ba b--green bg-light-blue' 
			type='search' 
			placeholder='search robots'
			onChange = {searchChg} />
		</div>
		);
}

export default SearchField;