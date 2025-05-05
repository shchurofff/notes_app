import css from './index.module.scss'

export const MainHeader = ({ filter }) => {
  return (
    <div>
      <h1 className={css.main_header_title}>{filter === 'all' ? 'Все записи' : 'Важные'}</h1>
    </div>
  )
}
