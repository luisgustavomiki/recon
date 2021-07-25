import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileUploadBox from './FileUploadBox';
import { AccordionActions, Button, Divider } from '@material-ui/core';
import FileUploadAccordion from './accordion/FileUploadAccordion';
import ComparisonResultsAccordion from './accordion/ComparisonResultsAccordion';
import UnmatchedReportAccordion from './accordion/UnmatchedReportAccordion';

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

export default function ReconAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FileUploadAccordion />
      <ComparisonResultsAccordion />
      <UnmatchedReportAccordion />
    </div>
  );
}
