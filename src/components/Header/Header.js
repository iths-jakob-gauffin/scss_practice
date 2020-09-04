import React from 'react'

import "./Header.scss";

const Header = () => {
    return (
        <header className="Header">
            <div className="Header__LogoBox">
                <img src="img/logo-white.png" alt="Logo" className="Header__Logo" />
            </div>

            <div className="Header__Heading">
                <h1 className="Heading__Primary">
                    <span className="Heading__Primary--Main">Outdoors</span>
                    <span className="Heading__Primary--Sub">is where life happens</span>
                </h1>

                <a href="#" className="Btn Btn--White Btn--Animated">Discover our tours</a>
            </div>
        </header>

    )
}

export default Header
