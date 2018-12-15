import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class About extends Component {
    render() {
        return(
            <div>
                <Paper>
                    <p>参加者の追加</p>
                    <FormControl fullWidth>
                        <TextField
                        type="text"
                        variant="outlined"
                        label="参加者のアドレスを入力してください"
                        />
                    </FormControl>
                    <Button size='large' variant="outlined">追加</Button>
                    <p>参加者一覧</p>
                    <List component="nav">
                        <NavLink to={'/'}>
                            <ListItem>
                            <ListItemText primary='kondo' secondary='0x2Aa2489Ea0B7428123Ba4A87B92F8B41b31B11a5' />
                            </ListItem>
                        </NavLink>
                        <NavLink to={'/'}>
                            <ListItem>
                            <ListItemText primary='mitsumasa' secondary='0x0d8388A23c1C31Bbd63B811E8C514Ba66624d51F' />
                            </ListItem>
                        </NavLink>
                    </List>
                </Paper>
            </div>
        );
    }
}

export default About;