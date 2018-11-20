import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="navbar-relative">
            <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">需要予測システム</Link>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;