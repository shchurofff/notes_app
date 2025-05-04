import React from 'react'
import { Note } from '../Note'
import css from './index.module.scss'

export const NotesArea = ({ notes, onDelete }) => {
  return (
    <ul className={css.notes_content}>
      {notes.map((note) => (
        <Note key={note.id} text={note.text} onDelete={() => onDelete(note.id)} />
      ))}
    </ul>
  )
}
