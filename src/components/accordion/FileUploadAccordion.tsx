import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FileUploadBox from '../FileUploadBox';
import { AccordionActions, Button, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

export default function ReconAccordion() {
  const classes = useStyles();

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Select files to compare</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FileUploadBox disabled />
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button variant="contained" color="primary">
          Compare
        </Button>
      </AccordionActions>
    </Accordion>
  );
}



