import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class About extends Component {
    render() {
        return(
            <div>
                <h4>参加者の追加</h4>
                <FormControl fullWidth>
                    <TextField
                    type="text"
                    variant="outlined"
                    label="参加者のアドレスを入力してください"
                    />
                </FormControl>
                <Button size='large' variant="outlined">追加</Button>
                <h4>参加者一覧</h4>
                <List component="nav">
                    <NavLink to={'/'}>
                    <Card>
                        <ListItem>
                        <ListItemText primary='kondo' secondary='0x2Aa2489Ea0B7428123Ba4A87B92F8B41b31B11a5' />
                        </ListItem>
                    </Card>
                    </NavLink>
                    <NavLink to={'/'}>
                    <Card>
                        <ListItem>
                        <ListItemText primary='mitsumasa' secondary='0x0d8388A23c1C31Bbd63B811E8C514Ba66624d51F' />
                        </ListItem>
                    </Card>
                    </NavLink>
                </List>
                <hr/>
            </div>
        )
    }
}

export default About