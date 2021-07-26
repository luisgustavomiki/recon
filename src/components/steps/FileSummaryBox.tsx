import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { ReconFile } from '../../interfaces/reconFile';
import FileSummaryCard from './FileSummaryCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1000,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',

      '& .MuiTypography-root': {
        fontWeight: 'bold',
        margin: theme.spacing(1),
      },
    },
  }),
);

interface Props {
  left?: ReconFile;
  right?: ReconFile;
}

export default function FileSummaryBox({ left, right }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography>{left?.name}</Typography>
            { left && <FileSummaryCard {...left.summary} />}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography>{right?.name}</Typography>
            { right && <FileSummaryCard {...right.summary} />}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
