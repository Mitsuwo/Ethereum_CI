import React from 'react'
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

class ViewTable extends React.Component {
  render(props) {
    return (
      <Paper className={styles.root}>
        <Table className={styles.root}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell numeric>Name</TableCell>
              <TableCell numeric>Votes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.candidates.map((candidate) => {
              return(
                <TableRow>
                  <TableCell>{candidate.id.toNumber()}</TableCell>
                  <TableCell numeric>{candidate.name}</TableCell>
                  <TableCell numeric>{candidate.voteCount.toNumber()}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
      // <table class='table'>
      //   <thead>
      //     <tr>
      //       <th>#</th>
      //       <th>Name</th>
      //       <th>Votes</th>
      //     </tr>
      //   </thead>
      //   <tbody >
      //     {this.props.candidates.map((candidate) => {
      //       return(
      //         <tr>
      //           <th>{candidate.id.toNumber()}</th>
      //           <td>{candidate.name}</td>
      //           <td>{candidate.voteCount.toNumber()}</td>
      //         </tr>
      //       )
      //     })}
      //   </tbody>
      // </table>
    )
  }
}

export default ViewTable