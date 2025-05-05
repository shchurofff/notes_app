import React from 'react'
import { FaReact, FaRegStar } from 'react-icons/fa'
import cn from 'classnames';
import css from './index.module.scss'

export const FilterButton = ({ value, onClick, isActive, filter }) => {
  return (
    <button className={cn(css.filter_btn, {[css.active] : isActive})} onClick={onClick}>
      {/* {filter === 'important' ? <FaRegStar /> : <FaReact/>} */}
      <span>{value}</span>
    </button>
  )
}
