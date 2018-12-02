import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'react-moment';

class ViewTable extends Component {
  render() {
    return (
      <Paper>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>投票者</TableCell>
              <TableCell>予測値</TableCell>
              <TableCell>投票時刻</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.votes.map((vote) => {
              console.log(vote.value);
              return(
                <TableRow>
                  <TableCell>{vote.sender}</TableCell>
                  <TableCell>{vote.value.toNumber()}</TableCell>
                  <TableCell>
                    <Moment format="YYYY/MM/DD HH:mm">
                      {vote.when.toNumber()}
                    </Moment>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default ViewTable