import { Accordion as MAccordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

interface Props {
  title: string;
  children?: ReactNode;
  disabled?: boolean;
  expanded?: boolean;
}

export default function Accordion({ title, children, disabled, expanded }: Props) {
  const classes = useStyles();

  return (
    <MAccordion disabled={disabled} expanded={expanded}>
      <AccordionSummary>
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MAccordion>
  );
}
