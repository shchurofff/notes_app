import React from 'react'
import { AddInput } from './components/Add-Input'
import AppHeader from './components/App-Header'
import SearchPanel from './components/Search-Panel'
import './styles/global.scss'

export const App = () => {
  return (
    <div className="app_wrapper">
      <div className="nav">
        <AppHeader />
        <SearchPanel />
      </div>
      <div className="notes_part">
        <div className="notes_content">
          <p>Заметка 1</p>
          <p>Заметка 2</p>
          <p>Заметка 3</p>
        </div>
        <AddInput />
      </div>
    </div>
  )
}

export default App
