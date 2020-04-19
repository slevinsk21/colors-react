import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';

// Colors
import { pink } from '@material-ui/core/colors';

// Icons
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(12)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: pink[900] }}>
        <Toolbar>
          <Typography className={classes.title} component="span">
            <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
              Colors - React.js
            </Box>
          </Typography>
          <Button
            variant="text"
            href="https://github.com/slevinsk21/colors-react"
            target="_blank"
            startIcon={<LaunchIcon />}
            style={{ color: 'white' }}
          >
            Repository
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
