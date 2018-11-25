import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class ViewTable extends Component {
  render() {
    return (
      <Paper className={styles.root}>
        <Table className={styles.root}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell numeric>Voter</TableCell>
              <TableCell numeric>Value</TableCell>
              <TableCell numeric>Host ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.filtered_votes.map((vote) => {
              return(
                <TableRow>
                  <TableCell>{vote.id.toNumber()}</TableCell>
                  <TableCell numeric>{vote.sender}</TableCell>
                  <TableCell numeric>{vote.value.toNumber()}</TableCell>
                  <TableCell numeric>{vote.hostId.toNumber()}</TableCell>
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