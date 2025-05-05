import React, { useEffect, useState } from 'react'
import { AddInput } from './components/Add-Input'
import { InfoHeader } from './components/App-Header'
import { FilterButton } from './components/Filter-Button'
import { MainHeader } from './components/Main-Header'
import { NotesArea } from './components/Notes-Area'
import { SearchPanel } from './components/Search-Panel'
import { LOCAL_FILTER_KEY, LOCAL_STORAGE_KEY } from './selectors'
import './styles/global.scss'

export const App = () => {
  const [notes, setNotes] = useState([])

  // В стейт записана функция, чтобы при обновлении страницы брать информацию из ls
  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem(LOCAL_FILTER_KEY)
    return saved ? JSON.parse(saved) : 'all'
  })

  const [filterText, setFilterText] = useState('')

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

  //Эффект для записи смены фильтра в ls
  useEffect(() => {
    localStorage.setItem(LOCAL_FILTER_KEY, JSON.stringify(filter))
  }, [filter])

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

  const toggleImportant = (id) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          // Возвращаем новый объект с инвертированным important
          return { ...note, important: !note.important }
        } else {
          // Остальные заметки без изменений
          return note
        }
      })
    )
  }

  const getFilteredNotes = () => {
    let filtered
    if (filter === 'important') {
      filtered = notes.filter((note) => note.important)
    } else {
      filtered = notes
    }

    if (filterText !== '') {
      filtered = filtered.filter((note) => note.text.toLowerCase().includes(filterText.toLowerCase()))
    }
    return filtered
  }

  return (
    <div className="app_wrapper">
      <div className="navbar">
        <InfoHeader />
        <SearchPanel value={filterText} searchValue={setFilterText} />
        <FilterButton value={'Все записи'} onClick={() => setFilter('all')} isActive={filter === 'all'} filter={filter}/>
        <FilterButton value={'Важные'} onClick={() => setFilter('important')} isActive={filter === 'important'} filter={filter}/>
      </div>
      <div className="main">
        <MainHeader filter={filter} />
        <NotesArea notes={getFilteredNotes()} onDelete={deleteNote} onImportant={toggleImportant} />
        <AddInput onAdd={addNote} />
      </div>
    </div>
  )
}

export default App
