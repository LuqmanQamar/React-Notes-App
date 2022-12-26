
import './App.css';
import NoteList from './Components/NoteList';
import { nanoid } from 'nanoid'
import { useState,useEffect } from 'react';
import Searchbar from './Components/Searchbar';
import Header from './Components/Header';

function App() {
// Search Note
const [searchNote, setSearchNote]=useState('')

  // Notes
  const [notes,setNotes]=useState([{
    id:nanoid(),
    text:'This is my first Note!',
    date:'20-05-2022'
  },
  {
    id:nanoid(),
    text:'This is my second Note!',
    date:'25-09-2022'
  },
  {
    id:nanoid(),
    text:'This is my third Note!',
    date:'08-10-2022'
  },
  {
    id:nanoid(),
    text:'This is my final Note!',
    date:'20-12-2022'
  }
])
// Add Note
const addNote=(text)=>{
const currentDate=new Date();
const newNote={

  id:nanoid(),
  text:text,
  date:currentDate.toLocaleDateString()
}
const newNotes=[...notes,newNote]
setNotes(newNotes)
}
// Delete Note
const deleteNote=(id)=>{
  const delNote= notes.filter((note)=> note.id !== id)
  setNotes(delNote)
}

// Dark Mode
const [mode, setMode] = useState('light')

const toggleButton=()=>{
  if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='black'
    document.body.h3.style.color='white'
    alert('Dark Mode Enabled!')
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    document.body.h3.style.color='black'
    alert('Light Mode Enabled!')
  }
}

// Local Storage
useEffect(()=>{
  localStorage.setItem('notes-data',JSON.stringify(notes))
},[notes])

useEffect(()=>{
  const savedNotes=JSON.parse(localStorage.getItem('notes-data'))
  if(savedNotes){
    setNotes(savedNotes)
  }
},
[])

  return (
    <div className="container">
      <Header toggleButton={toggleButton} mode={mode}/>
      <Searchbar handleSearchNote={setSearchNote}/>
      <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
