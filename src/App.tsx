import { useState, useMemo } from 'react'
import api from "./api/api"
import Note from './types/types'
import NoteCard from './components/NoteCard'
import NoteEditModal from './components/NoteEditModal'

function App() {
  const [draft, setDraft] = useState<null | Partial<Note>>(null)
  //le puedo decir 2 valores que puede tener
  const [notes, setNotes] = useState<Note[]>(() => api.notes.list())
  //Lazy Loading al pasarle un callback en el useState
  const [view, setView] = useState<"active"|"archived">("active")
  //con esto defino que notas deben mostrarse. Cambiara el filter seguro
  const matches = useMemo(()=>{
    return notes.filter(note => {
      if(view === "active") return !note.archived
      else if(view === "archived") return note.archived;
    })
  }, [notes,view])

  const handleArchive = (id: Note['id']) => {
    //En un setState de un estado, como parametro siempre recibimos el estado anterior a la modificacion que vamos a realizar.
    setNotes((notes) => {
      return notes.map(note => { 
          return note.id !== id 
          ? note 
          : {
            ...note,
            archived: !note.archived,
          };
        })
    })
  }

  const handleDelete = (id: Note['id']) => {
    setNotes((notes) => { return notes.filter(note => note.id !== id)})
  }

  const handleEdit = (note: Note) => {
    setDraft((note))
  }

  const handleSave = () => {
    if(draft?.id){
      setNotes((notes) => {
        return notes.map(note => { 
            return note.id !== draft.id 
            ? note 
            : {
              ...draft,
              lastEdit: new Date().toString().slice(4,15),
            } as Note;
          })
      })
    }else{
      setNotes(notes=>notes.concat({
        //Una fecha pasada a number y a string
        id: String(+new Date()),
        lastEdit: new Date().toString().slice(4,15), 
        ...(draft as Omit<Note, "id" | "lastEdit">),
      }))
    }
    setDraft(null)
  }

  const handleChange = (field: string, value:string) => {
    setDraft(draft=>({
      ...draft,
      [field]: value
    }))
  }

  return (
    <div style={{padding: 12}}>
      <div>
        <h1>Mis Notas</h1>
        <button className='nes-btn is-primary' style={{marginBottom: 24}} onClick={()=>{setDraft({})}}>Crear Nota</button>
        {
          view === "active" ?
            <button className='nes-btn is-primary' style={{marginBottom: 24, marginLeft: 20}} onClick={()=>{setView("archived")}}>Archivadas</button>
          :
            <button className='nes-btn is-primary' style={{marginBottom: 24,marginLeft: 20}} onClick={()=>{setView("active")}}>Activas</button>
        }
      </div>

      <div style={{display: "grid",gap:24, gridTemplateColumns: "repeat(auto-fill, minmax(680px,1fr))"}}>
        {
          matches.map(note => (
            <NoteCard key={note.id} note={note} onArchive={handleArchive} onDelete={handleDelete} onEdit={handleEdit}/>
          ))
        }
      </div>
      {
        draft && <NoteEditModal note={draft} onChange={handleChange} onSave={handleSave} onClose={()=>{setDraft(null)}}/>
      }
    </div>
  )
}

export default App
