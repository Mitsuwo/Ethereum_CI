import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

const Navbar = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <h3>あなたのアカウント: {props.account}</h3>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Link to='/' className={classes.grow}><Button>需要予測システム</Button></Link>
                    <NavLink to='/hosting'><Button>Home</Button></NavLink>
                    <NavLink to='/about'><Button>ABOUT</Button></NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withStyles(styles)(Navbar);