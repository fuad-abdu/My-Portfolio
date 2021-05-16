import React, { useState } from 'react'
import './Header.css'

function Header() {

    const [toggle, setToggle] = useState(false);

    const Toggle = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="header__logo">
                        <a href="">
                            <img className="header__laptopIcon" src="./laptop-icon.png" />
                            Fuad
                        </a>
                    </div>

                    <div className="header__option my-auto ml-auto">
                        <div className="header__nav">
                            <nav className={toggle ? "active" : "notactive"}>
                                <ul>
                                    <li><a className="nav_option active" href="">Home</a></li>
                                    <li><a className="nav_option" href="">About</a></li>
                                    <li><a className="nav_option" href="">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header__items">
                            <div className="mode">
                                <img className="moon-icon" src="./moon-icon.png" alt="" />

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
