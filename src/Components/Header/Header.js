import React, { useState } from 'react'
import './Header.css';
import {changeTheme} from '../until';
import { Link } from 'react-router-dom';

function Header(props) {

    const [toggle, setToggle] = useState(false);
    const [theme, setTheme] = useState(false);
    var currentTheme = ''

    const Toggle = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    if (theme) {
        currentTheme = "dark"
    } else {
        currentTheme = "light"
    }

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="header__logo">
                        <Link to="/">
                            <img className="header__laptopIcon" src="./laptop-icon.png" />
                            Fuad
                        </Link>
                    </div>

                    <div className="header__option my-auto ml-auto">
                        <div className="header__nav">
                            <nav className={toggle ? "active" : "notactive"}>
                                <ul>
                                    <li><Link className={"nav_option", props.home ? "active" : ""} to="/">Home</Link></li>
                                    <li><Link className={"nav_option", props.about ? "active" : ""} to="/about">About</Link></li>
                                    <li><Link className={"nav_option", props.contact ? "active" : ""} to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__items">
                            <div className="mode">
                                <label className="theme-switch" for="checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <div className="mode-container">
                                        <i className="gg-sun" id="gg-sun" onClick={() => setTheme(false)}></i>
                                        <i className="gg-moon" id="gg-moon" onClick={() => setTheme(true)}></i>
                                    </div>
                                </label>

                            </div>
                            <div className="menu-toggle-container" onClick={Toggle}>
                                <div className="menu-toggle my-auto"><img src="./menu.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
