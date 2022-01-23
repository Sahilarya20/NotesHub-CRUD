import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  // const s1={
  //     "name":"sahil",
  //     "class":"5C4"
  // }
  // const [state, setState] = useState(s1);
  // const update=()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name":"accha",
  //             "class":"6C4"
  //         })
  //     }, 1000);

  // }
  const host = "http://localhost:5000";

  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //GET ALL Note
  const getNotes = async() => {
    //TODO API call

  const response = await fetch(`${host}/api/notes/fetchallotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMzM4MTQ3MmJhZjRhYzFmMmQ3OWZmIn0sImlhdCI6MTY0MTIzMjQwNH0.SpBVBQ2apLmsAhWSrBM_rhRUqziAM1_FlT9bUDTiaJo"  
      }
    });
    const json=await response.json();
    console.log(json);
    setNotes(json);
  }
  //Add Note
  const addNote = async(title, description, tag) => {
    //TODO API call

  const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMzM4MTQ3MmJhZjRhYzFmMmQ3OWZmIn0sImlhdCI6MTY0MTIzMjQwNH0.SpBVBQ2apLmsAhWSrBM_rhRUqziAM1_FlT9bUDTiaJo"  
      },
      body: JSON.stringify({title,description,tag})
    });
    const note =  await response.json(); 
    setNotes(notes.concat(note))
    
  }

  //Delete Note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',  
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMzM4MTQ3MmJhZjRhYzFmMmQ3OWZmIn0sImlhdCI6MTY0MTIzMjQwNH0.SpBVBQ2apLmsAhWSrBM_rhRUqziAM1_FlT9bUDTiaJo"  
      },
    });
    const json=response.json(); 
    console.log(json);
    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);
  }


  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',  
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMzM4MTQ3MmJhZjRhYzFmMmQ3OWZmIn0sImlhdCI6MTY0MTIzMjQwNH0.SpBVBQ2apLmsAhWSrBM_rhRUqziAM1_FlT9bUDTiaJo"  
      },
      body: JSON.stringify({title,description,tag})
    });
   
    let newNotes=JSON.parse(JSON.stringify(notes))

    //LOGIN TO EDIT IN CLINT
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    // <noteContext.Provider value={{state,update}}>
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}



export default NoteState;