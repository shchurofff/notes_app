import React from 'react'
import cn from 'classnames'
import { FaStar, FaRegStar, FaTrash } from 'react-icons/fa'
import css from './index.module.scss'

export const Note = ({ text, important, onDelete, onImportant }) => {
  return (
    <li className={css.note_block}>
      <span className={css.text}>{text}</span>
      <button className={css.trash_btn} onClick={onDelete}>
        <FaTrash />
      </button>
      <button className={cn(css.star_btn, { [css.important_btn]: important })} onClick={onImportant}>
        {important ? <FaStar color="grey" /> : <FaRegStar />}
      </button>
    </li>
  )
}
