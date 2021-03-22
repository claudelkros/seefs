import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './styles/search.scss'


// const options = ['Option 1', 'Option 2'];


export default function Search() {
    return (
        <div className="search">
            <input type="text" name="search" placeholder="Entrer le nom que vous rechercher" className="search__field" />
            <span><SearchIcon className="search__icon" /></span>
            <span><div className="search__btn">Rechercher</div></span>
        </div>
    )
}
