import {createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontSize: 20
    },
    palette: {
        primary: {
            light: '#1b1b1b',
            main: '#6d6d6d',
            dark:'#000a12',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ffffe4',
            main: '#ffe0b2',
            dark: '#cbae82',
            contrastText: '#000'
        }
    }
});

theme.props = {
    MuiButton: {
        fullWidth: true
    },
    MuiTooltip: {
        arrow: true,
        placement: 'top'
    },
    MuiIconButton: {
        edge: 'end'
    },
    MuiTextField: {
        fullWidth: true,
        autoFocus: true
    }
};

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: '5px',
            textTransform: 'none',
            maxWidth: '1000px',
            marginBottom: '10px',
            fontWeight: 700,
            fontSize: '1.5rem',
        },
        containedPrimary: {
            "&:hover": {
                backgroundColor: theme.palette.primary.light
            }
        }
    },
    MuiTooltip: {
        tooltip: {
            backgroundColor: '#fff',
            border: `2px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main
        },
        arrow: {
            color: theme.palette.primary.main
        }
    },
    MuiIconButton: {
        root: {
            outline: 'none',
            "&:nth-last-child()": {
                paddingRight: '20px'
            }
        }
    },
    MuiTextField: {
        root: {
            maxWidth: '1000px',
            marginBottom: '50px',
            fontSize: '3rem',
        }
    },
    MuiFilledInput: {
        root: {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: 'white'
            },
            '&.Mui-focused': {
                backgroundColor: theme.palette.primary.light
            }
        }
    }
}

export default theme;