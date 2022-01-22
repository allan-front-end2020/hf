import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header =() =>{
    return (
    <header className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                    Freixo
                </Link>
            </h1>
        </div>
        <div className='header-link'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/signup'>Singnup</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
          
        </div>
    </header>

    )
}

export default Header ;