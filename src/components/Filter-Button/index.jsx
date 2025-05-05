import React from 'react'
import css from './index.module.scss'

export const FilterButton = ({ value, onClick }) => {
  return <button className={css.filter_btn} onClick={onClick}>{value}</button>
}
