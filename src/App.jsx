import React from 'react'
import './styles/global.scss'
import AppHeader from './components/App-Header'
import SearchPanel from './components/Search-Panel'
import { PostStatusFilter } from './components/Post-Status-Filter'
import { AddInput } from './components/Add-Input'

export const App = () => {
  return (
    <div className="app_wrapper">
      <div className='nav'>
        <AppHeader />
        <div className="search_wrapper">
          <SearchPanel />
        </div>
      </div>
      <div className='notes_part'>
        <AddInput />
      </div>
    </div>
  )
}

export default App
