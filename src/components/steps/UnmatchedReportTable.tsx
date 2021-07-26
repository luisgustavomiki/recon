import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme } from '@material-ui/core';
import React from 'react';
import { ReconFile } from '../../interfaces/reconFile';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Entry } from '../../interfaces/entry';


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
    field: 'leftReference',
    headerName: 'Reference (1)',
    width: 200,
  },
  {
    field: 'leftDate',
    headerName: 'Date (1)',
    width: 130,
  },
  {
    field: 'leftAmount',
    headerName: 'Amount (1)',
    width: 150,
  },
  {
    field: 'rightReference',
    headerName: 'Reference (2)',
    width: 200,
  },
  {
    field: 'rightDate',
    headerName: 'Date (2)',
    width: 130,
  },
  {
    field: 'rightAmount',
    headerName: 'Amount (2)',
    width: 150,
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

  const leftEntries = left.details.unmatchedRecords;
  const rightEntries = right.details.unmatchedRecords;

  const unique = Array.from(new Set([...leftEntries.map(e => e.reference), ...rightEntries.map(e => e.reference)])).sort();

  function findByReference(entries: Array<Entry>, reference: string): Entry | undefined {
    return entries.find(e => e.reference === reference);
  }

  const pairedEntries = unique.map(reference => {
    const l = findByReference(leftEntries, reference);
    const r = findByReference(rightEntries, reference);

    return {
                id: reference,
          leftDate: l?.date ?? '--MISSING--',
     leftReference: l ? reference : '--MISSING--',
        leftAmount: l?.amount ?? '--MISSING--',
         rightDate: r?.date ?? '--MISSING--',
    rightReference: r ? reference : '--MISSING--',
       rightAmount: r?.amount ?? '--MISSING--',
    };
  });

  return (
    <div style={{ height: 300, width: 1000 }}>
      <DataGrid
        rows={pairedEntries}
        columns={columns}
        pageSize={20}
        rowHeight={25}
      />
    </div>
  );
}
