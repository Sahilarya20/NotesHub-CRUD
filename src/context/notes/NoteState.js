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
    const json = response.json(); 

    const note = {
      "_id": "61d34db0975fasdfasdfff2efd841ece30",
      "user": "61d3381472baf4ac1f2d79ff",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-01-03T19:25:36.671Z",
      "__v": 0
    };
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
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',  
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFkMzM4MTQ3MmJhZjRhYzFmMmQ3OWZmIn0sImlhdCI6MTY0MTIzMjQwNH0.SpBVBQ2apLmsAhWSrBM_rhRUqziAM1_FlT9bUDTiaJo"  
      },
      body: JSON.stringify({title,description,tag})
    });
   


    //LOGIN TO EDIT IN CLINT
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    // <noteContext.Provider value={{state,update}}>
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}



export default NoteState;