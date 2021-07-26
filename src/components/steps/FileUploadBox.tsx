import { Button, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { ReconReport } from '../../interfaces/reconReport';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1000,

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

interface Props {
  disabled?: boolean;
  setReport: (report: ReconReport) => unknown;
}

export default function FileUploadBox({ disabled, setReport }: Props) {
  const classes = useStyles();

  const [leftFile, setLeftFile] = useState<File | undefined>();
  const [rightFile, setRightFile] = useState<File | undefined>();

  const saveFile = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    if (event.target.files === null) {
      return;
    }

    if (id === 'left-file') {
      setLeftFile(event.target.files[0]);
    } else if (id === 'right-file') {
      setRightFile(event.target.files[0]);
    }
  };

  const uploadFiles = async () => {
    if (!leftFile || !rightFile) {
      return; 
    }

    const formData = new FormData();
    formData.append("leftFile", leftFile);
    formData.append("rightFile", rightFile);

    try {
      const res = await axios.post(
        "/api/report",
        formData
      );
      console.log(res);

      setReport(res.data as ReconReport);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form id="file-upload" className={classes.root} action="/api/hello" method="post" encType="multipart/form-data">
      <div>
        <TextField id="standard-basic" disabled placeholder={leftFile?.name || "Select first file"} size="small"/>
        <input hidden disabled={disabled} id="left-file" type="file" onChange={saveFile}/>
        <label htmlFor="left-file">
          <Button disabled={disabled} color="primary" component="span">
            Upload
          </Button>
        </label>
      </div>
      <div>
        <TextField id="standard-basic" disabled placeholder={rightFile?.name || "Select second file"} size="small" />
        <input hidden disabled={disabled} id="right-file" type="file" onChange={saveFile}/>
        <label htmlFor="right-file">
          <Button disabled={disabled} color="primary" component="span">
            Upload
          </Button>
        </label>
      </div>
      <div>
        <Button variant="contained" color="primary" disabled={!leftFile || !rightFile} onClick={uploadFiles}>Compare</Button>
      </div>
    </form>
  );
}
