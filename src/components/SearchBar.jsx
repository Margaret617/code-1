import React from 'react'

function SearchBar({onSearch}) {
  return (
    <input className='searchinput' type="text" placeholder="TRANSACTIONS?" onChange={(e)=>onSearch(e.target.value)}/>
  );
}

export default SearchBar