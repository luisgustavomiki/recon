import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { ReconFile } from '../../interfaces/reconFile';
import FileSummaryCard from './FileSummaryCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    table: {
      
    },
  }),
);

interface Props {
  left: ReconFile;
  right: ReconFile;
}

export default function FileSummaryBox({ left, right }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h4">{left.name}</Typography>
            <FileSummaryCard {...left.summary} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h4">{right.name}</Typography>
            <FileSummaryCard {...right.summary} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
