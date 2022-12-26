import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
import {  NoteListWrapper } from './StyledComponents'

function NoteList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <NoteListWrapper>
      {notes.map((note)=>{
        return(<Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>)
      })}
      <AddNote handleAddNote={handleAddNote}/>
    </NoteListWrapper>
  )
}

export default NoteList
