import React from 'react'
import css from './index.module.scss'

export const Note = ({ text, onDelete, onImportant }) => {
  return (
    <li className={css.note_block}>
      <p>{text}</p>
      <button onClick={onDelete}>Удалить</button>
      <button onClick={onImportant}>Важная</button>
    </li>
  )
}
