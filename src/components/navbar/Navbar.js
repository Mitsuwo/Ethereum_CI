import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navbar = (props) => {
    return(
        <div className="root">
            <AppBar style={{ backgroundColor: '#8b4513' }} position="fixed" className="address">あなたのアカウント: {props.account}</AppBar>
            <AppBar position="fixed" style={{ backgroundColor: '#2f4f4f' }} className="appbar">
                <Toolbar>
                    <Link to='/' className="link"><p className="title">需要予測システム</p></Link>
                    <NavLink to='/hosting' className="navLink"><Button><p className="item">主催する</p></Button></NavLink>
                    <NavLink to='/about' className="navLink"><Button><p className="item">参加者選択</p></Button></NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;