import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Moment from 'react-moment';

class ViewTable extends Component {
  renderSwitch(num) {
    switch (num) {
      case 1:
        return this.props.child.rangeOne;
      case 2:
        return this.props.child.rangeTwo;
      case 3:
        return this.props.child.rangeThree;
      case 4:
        return this.props.child.rangeFour;
      case 5:
        return this.props.child.rangeFive;
      case 6:
        return this.props.child.rangeSix;
      case 7:
        return this.props.child.rangeSeven;
      case 8:
        return this.props.child.rangeEight;
      case 9:
        return this.props.child.rangeNine;
      default:
        return this.props.child.rangeTen;
    }
  }
  render() {
    return (
      <div style={style.card}>
        <Paper>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>投票者</TableCell>
                <TableCell>予測区間</TableCell>
                <TableCell>投票時刻</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.votes.map((vote) => {
                return(
                  <TableRow>
                    <TableCell>{vote.sender}</TableCell>
                    <TableCell>
                      {this.renderSwitch(vote.level.toNumber())}
                    </TableCell>
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
      </div>
    );
  }
}

const style = {
  card: {
      margin: 30,
  },
}

export default ViewTable;