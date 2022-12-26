import React from 'react'
import '../App.css';
import { NewNote, NoteFooter, NewNoteButton } from './StyledComponents'
import { useState } from 'react';

function AddNote({handleAddNote}) {

  const characterLimit=200;

  const [addNote,setAddNote]=useState('')

  const handleOnChangeNote=(e)=>{
    if(characterLimit - e.target.value.length >=0){
      setAddNote(e.target.value)
    }
    else{
      alert('Character limit for new Note exceeded !')
    }
        
  }

  const handleAddNoteClick=()=>{
    if(addNote.trim().length>0){
      handleAddNote(addNote)
      setAddNote('')
    }
    else{
      alert('Please enter the Note first!')
    }
    
  }
  return (
    <>
      <NewNote>
        <textarea cols="10" rows="4" placeholder='Please enter your note!' className='background' value={addNote} onChange={handleOnChangeNote}></textarea>
        <NoteFooter>
          <small>{characterLimit - addNote.length} Remaining</small>
          <NewNoteButton onClick={handleAddNoteClick}>Save</NewNoteButton>
        </NoteFooter>
      </NewNote>
    </>
  )
}

export default AddNote
