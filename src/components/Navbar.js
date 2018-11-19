import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="navbar-relative">
            <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">需要予測システム</Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to='/about'>about</NavLink></li>
                    <li><NavLink to='/voting'>投票フォーム</NavLink></li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;