import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return(
        <Menu>
          <div className="container">
            <MenuItem>Poke'Times</MenuItem>

            <MenuItem><Link to='/'>Home</Link></MenuItem>
            <MenuItem><NavLink to='/About'>About</NavLink></MenuItem>
            <MenuItem><NavLink to='/Contact'>Contact</NavLink></MenuItem>

          </div>
        </Menu>
    )
}

export default Navbar;