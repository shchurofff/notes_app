import React from 'react'
import css from './index.module.scss'

const AppHeader = () => {
  return (
    <div className={css.header}>
      <h1 className={css.name}>Oleg Shchurov</h1>
      <h2 className={css.info}>shchurov.oleg27@gmail.com</h2>
    </div>
  )
}

export default AppHeader
