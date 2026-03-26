import React from 'react'
import './NavBarra.css'

const NavBarra = () => {

    return (


        <header className="header">

            <nav class="menu">
                <div class="logo">
                <img src="/img/LogoOficial.svg" alt="Logo" class="logo_img"/>
                </div>

                <ul>
                    <li><a href="#">Roupas</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBarra


