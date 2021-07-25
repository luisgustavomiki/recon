import { Button, FormGroup, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',

      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

interface Props {
  disabled?: boolean
}

export default function FileUploadBox({ disabled }: Props) {
  const classes = useStyles();

  return (
    <FormGroup className={classes.root}>
      <div>
        <TextField id="standard-basic" disabled={disabled} placeholder="Select first file" size="small" />
        <input hidden disabled={disabled} id="contained-button-file" type="file" />
        <label htmlFor="contained-button-file">
          <Button disabled={disabled} color="primary" component="span">
            Upload
          </Button>
        </label>
      </div>
      <div>
        <TextField id="standard-basic" disabled={disabled} placeholder="Select second file" size="small" />
        <input hidden disabled={disabled} id="contained-button-file" type="file" />
        <label htmlFor="contained-button-file">
          <Button disabled={disabled} color="primary" component="span">
            Upload
          </Button>
        </label>
      </div>
    </FormGroup>
  );
}
