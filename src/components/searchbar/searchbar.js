import style from './searchbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Fragment } from 'react';

export default function Searchbar () {
    return(
        <div className={style.wrapper}>
             <SearchIcon className={style.searchIcon}/>
        <input 
            className={style.Searchbar} 
            placeholder = 'Search here ...'
        />
       

        </div>
    )
}