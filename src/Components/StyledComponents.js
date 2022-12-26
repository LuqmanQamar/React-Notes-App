import styled from 'styled-components'

// Header Style 
export const HeaderWrapper=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0px;
`
export const ToggleButton=styled.button`
background-color: #f0f1f3;
color: #333 ;
padding: 10px 15px;
border-radius: 20px;
cursor: pointer;
border: none;
:hover{
    background-color: brown;
    color: white;
}
`

// Searchbar Style
export const SearchWrapper=styled.div`
background-color: #f0f1f3;
border-radius: 10px;
display: flex;
align-items: center;
padding: 10px;
margin-bottom: 1.5rem;
`


// Note Component Style
export const NoteWrapper=styled.div`
background-color: lightgreen;
margin-bottom: 20px;
border-radius: 10px;
min-height: 170px;
display: flex;
flex-direction:column;
padding: 1rem;
justify-content: space-between;
`

export const NoteFooter=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

// NoteList Componenet Style
export const NoteListWrapper=styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
grid-gap: 10px;
`

// AddNote Component Style
export const NewNote=styled(NoteWrapper)`
background-color: blueviolet;
color: white;
`

export const NewNoteButton=styled.button`
background-color: white;
color: #333 ;
padding: 2px 15px;
border-radius: 20px;
cursor: pointer;
border: none;
:hover{
    background-color: brown;
    color: white;
}
`