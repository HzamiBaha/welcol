import React from 'react';
import "./header.css";
import logo from "../../assets/welcol.png";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
    return (
        <header className='header'>
            <nav className='nav'>
                <a href="index.html" >
                    <img src={logo} alt="welcol-logo" />
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu "}>
                    <ul className='nav__list'>
                        <li className='nav__item h6'>
                            Fonctionnalités
                        </li>
                        <li className='nav__item h6'>
                            Welcards
                        </li>
                        <li className='nav__item h6'>
                            Tarifs
                        </li>
                        <li className='nav__item h6'>
                            Contact
                        </li>
                    </ul>
                    <button className='button'> Devenir coach partenaire </button>
                </div>


                <button className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <DensityMediumIcon className='icon'></DensityMediumIcon>
                </button>
            </nav>
        </header>
    )
}

export default Header