import React from 'react';
import { makeStyles } from '@material-ui/core';
import useSessionContext from 'hooks/useSessionContext';
import placeholder from 'assets/images/avatar-placeholder.png';

const useStyles = makeStyles({
  image: {
    maxHeight: 'calc(100% - 0.25rem)',
    maxWidth: 'calc(100% - 0.25rem)',
    borderRadius: '50%',
    border: '0.125rem solid',
    borderColor: '#6200ee',
  },
});

function Avatar() {
  const { sessionData } = useSessionContext();
  const classes = useStyles();
  const { user } = sessionData;
  const src = (user && user.avatarUrl) || placeholder;

  return (
    <a href="/profile">
      <img className={classes.image} src={src} alt="avatar" />
    </a>
  );
}

export default Avatar;
