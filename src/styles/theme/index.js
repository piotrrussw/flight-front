import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#1820B4' },
};

const overrides = {
  MuiButton: {
    root: {
      height: '50px',
    },
  },
};

const themeName = 'Flight theme';

export default createMuiTheme({ palette, overrides, themeName });
