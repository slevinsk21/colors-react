import React from 'react';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor: theme.palette.grey[900]
  },
  autor: {
    color: theme.palette.secondary.dark
  }
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" gutterBottom>
        Colors - React.js
      </Typography>
      <Typography variant="body2">
        DEVELOPED BY: <span className={classes.autor}>@LNL.CAST</span>
      </Typography>

      <Typography variant="body2">
        {'Copyright © '}
        {new Date().getFullYear()}.
      </Typography>
    </footer>
  );
};
export default Footer;
