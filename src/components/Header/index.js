import React from 'react'
import './styles.css'

import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <nav>
            <img src={logo} className="logo"  alt=""/>
            <div className="menu">
                <div className="texts">
                    <a href="">SOBRE</a>
                    <a href="">TECNOLOGIAS</a>
                    <a href="">COMENTARIOS</a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
