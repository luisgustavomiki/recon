import { Accordion as MAccordion, AccordionActions, AccordionDetails, AccordionSummary, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { ReactNode } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
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
  defaultExpanded?: boolean;
  actions?: ReactNode;
}

export default function Accordion({ title, children, disabled, defaultExpanded, actions }: Props) {
  const classes = useStyles();
  const tail = actions && <><Divider /><AccordionActions>{actions}</AccordionActions></>;

  return (
    <MAccordion disabled={disabled} defaultExpanded={defaultExpanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
      {tail}
    </MAccordion>
  );
}
