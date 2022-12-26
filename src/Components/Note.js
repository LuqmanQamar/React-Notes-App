import React from 'react'
import '../App.css';
import { NoteWrapper, NoteFooter } from './StyledComponents'

function Note({ id, text, date, handleDeleteNote}) {
  return (
    <>
    <NoteWrapper>
     <p>{text}</p>
     <NoteFooter>
     <small>{date}</small>
     <i className="fa-solid fa-trash hover-effect" onClick={()=>{handleDeleteNote(id)}}></i>
     </NoteFooter>
    </NoteWrapper>
      
    </>
  )
}

export default Note
