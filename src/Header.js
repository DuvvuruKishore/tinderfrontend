import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
         
           <img className="header_logo" src="https://p.kindpng.com/picc/s/132-1323877_tinder-logo-png-transparent-png.png" alt=""/>
           <IconButton>
           <ForumIcon fontSize="large" className="header_icon"/>
           </IconButton>
           </div>
    )
}

export default Header
