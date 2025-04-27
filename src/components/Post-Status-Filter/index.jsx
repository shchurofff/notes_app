import css from './index.module.scss'

export const PostStatusFilter = () => {
  
  return (
    <div className={css.buttonGroup}>
      <button>All</button>
      <button>Important</button>
    </div>
  )
}
