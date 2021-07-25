import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import React from 'react';
import { ReconSummary } from '../../interfaces/reconSummary';

type Props = ReconSummary;

export default function FileSummaryCard({ totalRecords, matchingRecords, unmatchedRecords }: Props) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Total records
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {totalRecords}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Maching records
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {matchingRecords}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Unmatched records
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {unmatchedRecords}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
