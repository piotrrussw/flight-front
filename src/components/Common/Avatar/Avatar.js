import React from 'react';
import { Box } from '@material-ui/core';
import useSessionContext from 'hooks/useSessionContext';
import placeholder from 'assets/images/avatar-placeholder.png';
import './avatar.scss';

function Avatar() {
  const { sessionData } = useSessionContext();
  const { user } = sessionData;
  const src = (user && user.avatarUrl) || placeholder;

  return (
    <Box className="avatar">
      <img src={src} alt="avatar" />
    </Box>
  );
}

export default Avatar;
