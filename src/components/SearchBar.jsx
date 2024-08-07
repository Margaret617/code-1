import React from 'react'

function SearchBar() {
  return (
    <input className="searchinput" type="text" placeholder="TRANSACTIONS?" onChange={(e)=>onSearch(e.target.value)}/>
);
  
}

