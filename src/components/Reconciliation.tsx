import { Button, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Accordion from './Accordion';
import FileSummaryBox from './steps/FileSummaryBox';
import FileUploadBox from './steps/FileUploadBox';
import alpha from '../fixtures/alpha.json';
import UnmatchedReportTable from './steps/UnmatchedReportTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

export default function Reconciliation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion defaultExpanded title="Select files to compare" actions={<Button variant="contained" color="primary">Compare</Button>}>
        <FileUploadBox disabled />
      </Accordion>
      <Accordion title="Comparison results" actions={<Button variant="contained" color="primary">Unmatched Report</Button>}>
        <FileSummaryBox left={alpha.left} right={alpha.right}/>
      </Accordion>
      <Accordion title="Unmatched report">
        <UnmatchedReportTable left={alpha.left} right={alpha.right}/>
      </Accordion>
    </div>
  );
}
