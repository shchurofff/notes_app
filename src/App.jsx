import React from 'react'
import { AddInput } from './components/Add-Input'
import AppHeader from './components/App-Header'
import { FilterButton } from './components/Filter-Button'
import SearchPanel from './components/Search-Panel'
import './styles/global.scss'
import { Note } from './components/Note'
import { NotesArea } from './components/Notes-Area'

export const App = () => {
  return (
    <div className="app_wrapper">
      <div className="navbar">
        <AppHeader />
        <SearchPanel />
        <FilterButton value={'Все записи'} />
        <FilterButton value={'Важные'} />
      </div>
      <div className="main">
        <div className="main_header">
          <h1 className="main_header_title">Все записи</h1>
        </div>
        <NotesArea />
        <AddInput />
      </div>
    </div>
  )
}

export default App
