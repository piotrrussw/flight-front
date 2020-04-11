import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  fileInput: {
    display: 'none',
  },
});

function ImageUpload() {
  const classes = useStyles();

  return (
    <Button variant="contained" component="label">
      Upload avatar
      <input className={classes.fileInput} type="file" />
    </Button>
  );
}

export default ImageUpload;
