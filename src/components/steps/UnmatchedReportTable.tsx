import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@material-ui/core';
import React from 'react';
import { ReconFile } from '../../interfaces/reconFile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    table: {
      '& .MuiTableCell-head': {
        fontWeight: 'bold'
      },
    },
  }),
);

interface Props {
  left: ReconFile;
  right: ReconFile;
}

export default function UnmatchedReportTable({ left, right }: Props) {
  const classes = useStyles();

  const maxEntries = Math.max(left.entries.length, right.entries.length);
  const pairedEntries = Array(maxEntries).fill(1).map((_, index) => [left.entries[index], right.entries[index]]);
  const rows = pairedEntries.map(([left, right], index) => (
    <TableRow key={index}>
      <TableCell>{left?.date}</TableCell>
      <TableCell>{left?.reference}</TableCell>
      <TableCell>{left?.amount}</TableCell>
      <TableCell>{right?.date}</TableCell>
      <TableCell>{right?.reference}</TableCell>
      <TableCell>{right?.amount}</TableCell>
    </TableRow>
  ));

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                {left.name}
              </TableCell>
              <TableCell align="center" colSpan={3}>
                {right.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
