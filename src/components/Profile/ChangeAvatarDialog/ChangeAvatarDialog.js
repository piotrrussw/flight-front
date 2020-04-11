import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import propTypes from 'prop-types';
import ImageUpload from 'components/Common/ImageUpload';

function ChangeAvatarDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="avatar-dialog-title"
      aria-describedby="avatar-dialog-description"
    >
      <DialogTitle id="avatar-dialog-title">Upload avatar</DialogTitle>
      <DialogContent>
        <DialogContentText id="avatar-dialog-description">
          <ImageUpload />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ChangeAvatarDialog.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default ChangeAvatarDialog;
