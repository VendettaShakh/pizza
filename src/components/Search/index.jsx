import React from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '../../App'

const Search = () => {

    const {searchInput, setSearchInput} = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
        <img className={styles.search} width={20} height={20} src="images/search.svg" alt="Поиск" />
        <input className={styles.input} value={searchInput} onChange={(event) => setSearchInput (event.target.value)} type='text' placeholder='Введите название пиццы...' />
        {searchInput && (<img className={styles.clear} onClick={() => setSearchInput ('')} width={20} height={20} src="images/clear.svg" alt="Очистить" />)}
    </div>
  )
}

export default Search;