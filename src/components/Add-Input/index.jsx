import React from 'react'
import css from './index.module.scss'
import { useState } from 'react'

export const AddInput = ({ onAdd }) => {
  const [value, setValue] = useState('')

  return (
    <div className={css.add_wrapper}>
      <input
        className={css.custom_input}
        type="text"
        placeholder="Добавить задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value !== '') {
            onAdd(value)
            setValue('')
          }
        }}
      />
    </div>
  )
}
