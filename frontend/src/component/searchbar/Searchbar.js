import React from 'react'
import { BiSearch } from "react-icons/bi"
import "./Searchbar.css"
function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <div className="input_search">
          <BiSearch />
          <input type="text" placeholder='Search' />
        </div>
      </div>
    </>
  )
}

export default Searchbar