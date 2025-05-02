import React from 'react'
import css from './index.module.scss'

export const AddInput = () => {
  return (
    <div className={css.add_wrapper}>
      <input className={css.custom_input} type="text" placeholder="Добавить задачу" />
    </div>
  )
}
