import Note from "../types/types"

type NoteProps = {
    note: Note,
    onArchive: (id: Note['id']) => void,
    onDelete: (id: Note['id']) => void,
    onEdit: (note: Note) => void,
  }
  //Defino una prop que contendra al tipo Nota

function NoteCard({note, onArchive, onDelete, onEdit}: NoteProps) {

    return (
      <div className="nes-container is-rounded is-dark" style={{padding: 12}}>
        <div>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>Last Edited: {note.lastEdit}</p>
        </div>
  
        <div style={{display: "flex", justifyContent: "end"}}>
          <button className='nes-btn' onClick={()=>onArchive(note.id)}>Archivar</button>
          <button className='nes-btn is-warning' onClick={()=>onEdit(note)}>Editar</button>
          <button className='nes-btn is-error' onClick={()=>onDelete(note.id)}>Eliminar</button>
        </div>
  
      </div>
    )
}

export default NoteCard