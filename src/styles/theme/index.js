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
  MuiBottomNavigation: {
    root: {
      padding: '4px 0',
      backgroundColor: palette.primary.main,
    },
  },
  MuiBottomNavigationAction: {
    root: {
      overflow: 'hidden',
      padding: '0',
      color: '#B180F6',
      '&$selected': {
        color: '#fff',
        paddingTop: '0',
      },
    },
  },
};

const themeName = 'Flight theme';

export default createMuiTheme({ palette, overrides, themeName });
