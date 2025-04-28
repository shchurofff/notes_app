import css from './index.module.scss'

export const PostStatusFilter = () => {
  return (
    <div className={css.filterGroup}>
      <button className={css.button_l} type="submit">
        All
      </button>
      <button className={css.button_r} type="submit">
        Important
      </button>
    </div>
  )
}
