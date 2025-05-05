import React from 'react'
import css from './index.module.scss'

export const SearchPanel = ({ value, searchValue }) => {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Поиск по записям"
      value={value}
      onChange={(e) => searchValue(e.target.value)}
    />
  )
}
