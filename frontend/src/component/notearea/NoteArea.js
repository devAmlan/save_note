import React from 'react'
import "./NoteArea.css"
import Searchbar from '../searchbar/Searchbar'
import Noteinput from '../noteinput/Noteinput'
import Notes from '../notes/Notes'

function NoteArea() {
  return (
    <>
    <div className="notes_area">
    <Searchbar/>
    <Noteinput/>
    <Notes/>
    </div>
    </>
  )
}

export default NoteArea