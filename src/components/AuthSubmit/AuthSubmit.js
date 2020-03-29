import React from 'react';
import propTypes from 'prop-types';
import { Grid, Button, Box } from '@material-ui/core';
import 'components/AuthSubmit/auth-submit.scss';

function AuthSubmit({ submitField, field }) {
  return (
    <Grid>
      <Box mt={4} p={2} pl={4} pr={4}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          {submitField.text}
        </Button>
      </Box>

      <Box ml={4} mr={4} className="divided" align="center">
        <span className="divider" />
        <div className="text">or</div>
        <span className="divider" />
      </Box>

      <Box p={2} pl={4} pr={4}>
        <Button
          type="submit"
          href={field.href}
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
        >
          {field.text}
        </Button>
      </Box>
    </Grid>
  );
}

AuthSubmit.propTypes = {
  submitField: propTypes.object.isRequired,
  field: propTypes.object.isRequired,
};

export default AuthSubmit;
