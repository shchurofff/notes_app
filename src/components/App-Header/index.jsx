import React from 'react'
import css from './index.module.scss';

const AppHeader = () => {
//   const Header = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: space-between;
//   h1 {
//       font-size: 26px;
//       color: ${props => props.colored ? 'red' : 'black'}
//   }
//   :hover {
//       color: blue;
//       }
//   h2 {
//       font-size: 1.2rem;
//       color: grey;
//   }            
// `;

// const AppHeader = ({liked, allPosts}) => {
//   return (
//       <Header>
//           <h1>Oleg Shchurov</h1>
//           <h2>{allPosts} записей, из них понравилось {liked}</h2>
//       </Header>
//   )
// }



  return (
    <div className={css.header}>
      <h1 className={css.name}>Oleg Shchurov</h1>
      <h2 className={css.info}>
        ? записей, из них понравилось ??
      </h2>
    </div>
  )
}

export default AppHeader
