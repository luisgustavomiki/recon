import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { ReconReport } from '../interfaces/reconReport';
import Accordion from './Accordion';
import FileSummaryBox from './steps/FileSummaryBox';
import FileUploadBox from './steps/FileUploadBox';
import UnmatchedReportTable from './steps/UnmatchedReportTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  }),
);

export default function Reconciliation() {
  const classes = useStyles();

  const [report, setReport] = useState<ReconReport | undefined>();

  return (
    <div className={classes.root}>
      <Accordion disabled={!!report} expanded={!report} title="Select files to compare">
        <FileUploadBox disabled={!!report} setReport={setReport} />
      </Accordion>
      <Accordion disabled={!report} expanded={!!report} title="Comparison results">
        <FileSummaryBox left={report?.left} right={report?.right}/>
      </Accordion>
      <Accordion disabled={!report} expanded={!!report} title="Unmatched report">
        <UnmatchedReportTable left={report?.left} right={report?.right}/>
      </Accordion>
    </div>
  );
}
