import React from 'react'
import css from './index.module.scss'

export const FilterButton = ({ value }) => {
  return (
      <button className={css.filter_btn}>{value}</button>
  )
}
