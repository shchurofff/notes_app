import React from 'react'
import { Note } from '../Note'
import css from './index.module.scss'

export const NotesArea = ({ notes, onDelete, onImportant }) => {
  return (
    <ul className={css.notes_content}>
      {notes.map((note) => (
        <Note key={note.id} text={note.text} onDelete={() => onDelete(note.id)} onImportant={() => onImportant(note.id)}/>
      ))}
    </ul>
  )
}
