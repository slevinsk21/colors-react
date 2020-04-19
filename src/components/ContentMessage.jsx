import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Card,
  Container,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  containerBtn: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  btn: {
    color: theme.palette.common.white
  },
  cardContainer: {
    backgroundColor: '#263238',
    flexGrow: 1,
    color: 'white',
    textTransform: 'capitalize'
  },
  warning: {
    backgroundColor: theme.palette.warning.dark
  },
  error: {
    backgroundColor: theme.palette.error.dark
  }
}));

const ContenMessage = ({ color, message, fn, fnName }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={`${classes.cardContainer} ${classes[color]}`}>
        <CardContent>
          <Typography align="center" variant="h5" component="h2">
            {message}
          </Typography>
        </CardContent>

        {fn && (
          <CardActions className={classes.containerBtn}>
            <Button
              className={classes.btn}
              variant="outlined"
              size="small"
              onClick={fn}
            >
              {fnName}
            </Button>
          </CardActions>
        )}
      </Card>
    </Container>
  );
};

ContenMessage.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
  fn: PropTypes.func,
  fnName: PropTypes.string
};

export default ContenMessage;
