import React from 'react'
import css from './index.module.scss'

const SearchPanel = () => {
  return (
    <input className={css.input} type="text" placeholder="Поиск по записям" />
  )
}

export default SearchPanel
