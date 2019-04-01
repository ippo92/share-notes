import React from 'react'
import '../Form.css'

const AdminForm = ({ id: key, updateNote, notes, deleteNote }) => {

    const handleChange = (event, key) => {
        const {name, value} = event.target
        const note = notes[key]
        note[name] = value
        updateNote(key, note)
    }

    const note = notes[key]
    return (
    <div>
        <form onSubmit={() => deleteNote(key) }>
            <input value={note.title} onChange={e => handleChange(e, key)} className="feedback-input" name='title' type="text" placeholder='Titre'/>
            <textarea value={note.description} onChange={e => handleChange(e, key)} className="feedback-input" name="description" type="text" placeholder='Description'/>
            <input type="submit" value="Supprimer"/>
        </form>
    </div>
    )
}

export default AdminForm