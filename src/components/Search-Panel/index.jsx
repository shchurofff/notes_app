import React from 'react'
import css from './index.module.scss'

const SearchPanel = () => {
  return (
    <div className={css.input_wrapper}>
      <input className={css.input} type="text" placeholder="Поиск по записям" />
    </div>
  )
}

export default SearchPanel
