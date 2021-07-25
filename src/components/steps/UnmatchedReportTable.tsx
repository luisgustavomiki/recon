import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@material-ui/core';
import React from 'react';
import { ReconFile } from '../../interfaces/reconFile';
import { DataGrid, GridColDef } from '@material-ui/data-grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
      
    },
    table: {
      
      '& .MuiTableCell-head': {
        fontWeight: 'bold'
      },
    },
  }),
);

const columns: GridColDef[] = [
  {
    field: 'leftDate',
    headerName: 'Date (1)',
    width: 150,
  },
  {
    field: 'leftReference',
    headerName: 'Reference (1)',
    width: 150,
  },
  {
    field: 'leftAmount',
    headerName: 'Amount (1)',
    width: 110,
  },
  {
    field: 'rightDate',
    headerName: 'Date (2)',
    width: 150,
  },
  {
    field: 'rightReference',
    headerName: 'Reference (2)',
    width: 150,
  },
  {
    field: 'rightAmount',
    headerName: 'Amount (2)',
    width: 110,
  },
];

interface Props {
  left?: ReconFile;
  right?: ReconFile;
}

export default function UnmatchedReportTable({ left, right }: Props) {
  const classes = useStyles();

  if (!left || !right) {
    return (
      <div className={classes.root}></div>
    );
  }

  const maxEntries = Math.max(left.entries.length, right.entries.length);
  const pairedEntries = Array(maxEntries).fill(1).map((_, index) => ({
                id: index,
          leftDate: left.entries[index]?.date,
     leftReference: left.entries[index]?.reference,
        leftAmount: left.entries[index]?.amount,
         rightDate: right.entries[index]?.date, 
    rightReference: right.entries[index]?.reference,  
       rightAmount: right.entries[index]?.amount, 
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={pairedEntries}
        columns={columns}
        pageSize={5}
      />
    </div>
  );
}
