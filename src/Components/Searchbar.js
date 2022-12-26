import React from 'react'
import '../App.css';
import { SearchWrapper } from './StyledComponents'

function Searchbar({handleSearchNote}) {
  return (
    <>
      <SearchWrapper>
      <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder='Search...' className='style' onChange={(e)=>handleSearchNote(e.target.value)} />
      </SearchWrapper>
    </>
  )
}

export default Searchbar
