import Note from "../types/types"

type NoteEditModalProps = {
    onClose: VoidFunction,
    onSave: VoidFunction,
    onChange: (field: string, value: string) => void
    note: Partial<Note>
    //con Partial le digo que va a recibir ALGUNAS propieades de Note.
  }
  
  function NoteEditModal({note, onClose, onSave, onChange} : NoteEditModalProps){
    
  
    return (
      <section className='nes-dialog'
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
      }}>
        <div style={{
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.2)",
                width: "100%",
                height: "100%"
            }}/>
            <form method="dialog" style={{ backgroundColor: "white", zIndex: 2, padding: 12, border: "3px solid black"}}>
              <h3 className="title">Create/Edit Note</h3>
  
              <div className="nes-field" style={{display: "flex", gap:12, marginTop: 5, width:"100%"}}>
                <label htmlFor="title" style={{width:"40%"}}>Title</label>
                <input type="text" value={note.title} id="title" className="nes-input" onChange={(event) => onChange('title', event.target.value)}/>
              </div>
  
              <div style={{display: "flex", gap:12, marginTop: 5, width:"100%"}}>
                <label htmlFor="content" style={{width:"40%"}}>Content</label>
                <textarea id="content" value={note.content} className="nes-textarea" onChange={(event) => onChange('content', event.target.value)}></textarea>
              </div>
  
              <div className="nes-field" style={{display: "flex", gap:12, marginTop: 5, width:"100%"}}>
                <label htmlFor="categories" style={{width:"28%"}}>Categories</label>
                <div>
                  <input type="text" id="categories" className="nes-input"/>
                  <div style={{display: "flex", gap:12, marginTop: 5}}>
                    <input type="text" id="categories" className="nes-input" placeholder='New-Category'/>
                    <button className='nes-btn'>Add</button>  
                </div>
                </div>
              </div>
  
              <div className="dialog-menu" style={{display:"flex", justifyContent: "end", gap:10, marginTop: 5}}>
                <button className="nes-btn" onClick={onClose}>Cancel</button>
                {
                  note.id ? 
                    <button className="nes-btn is-primary" onClick={onSave}>Save</button>
                  :
                  <button className="nes-btn is-primary" onClick={onSave}>Crear</button>
                }
              </div>
            </form>
      </section>
    )
  }

  export default NoteEditModal