import React from 'react'
import { Note } from '../Note'
import css from './index.module.scss';

export const NotesArea = () => {
  return (
    <div className={css.notes_content}>
      <Note />
      <Note />
    </div>
  )
}
