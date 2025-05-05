import React from 'react'
import css from './index.module.scss'

export const SearchPanel = () => {
  return <input className={css.input} type="text" placeholder="Поиск по записям" />
}

