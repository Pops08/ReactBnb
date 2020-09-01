import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core'


function Header() {
    return (
        <div className='header'>
            <img 
                className="header__icon"
                src="https://logos-download.com/wp-content/uploads/2016/03/Airbnb_logo_small.png" 
                alt="Airbnb Logo Airbnb @.epicentrofestival.com">
            </img>

            <div className='header__center'>
                <input type='text' />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become A Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>






            </div>
    )
}

export default Header
