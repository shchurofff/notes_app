import React, { useEffect, useState } from 'react'
import { AddInput } from './components/Add-Input'
import AppHeader from './components/App-Header'
import { FilterButton } from './components/Filter-Button'
import { NotesArea } from './components/Notes-Area'
import SearchPanel from './components/Search-Panel'
import { LOCAL_STORAGE_KEY } from './selectors'
import './styles/global.scss'

export const App = () => {
  const [notes, setNotes] = useState([])

  // useEffect Для отрисовки сохранённых заметок
  // Если в lS что-то есть, то они появятся
  useEffect(() => {
    const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes))
    }
  }, [])

  // useEffect для сохранения всего, что есть в стейте, или удаления ключа
  // если в стейте пусто
  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY) // Удаляем из хранилища, если список пуст
    }
  }, [notes])

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text,
      important: false,
    }

    setNotes([...notes, newNote])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

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
        <NotesArea notes={notes} onDelete={deleteNote} />
        <AddInput onAdd={addNote} />
      </div>
    </div>
  )
}

export default App
