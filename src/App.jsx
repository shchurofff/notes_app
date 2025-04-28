import React from 'react'
import './styles/global.scss'
import AppHeader from './components/App-Header'
import SearchPanel from './components/Search-Panel'
import { PostStatusFilter } from './components/Post-Status-Filter'

export const App = () => {
  return (
    <div className="app_wrapper">
      <AppHeader />
      <div className="search_wrapper">
        <SearchPanel />
        <PostStatusFilter />
      </div>
    </div>
  )
}

export default App
