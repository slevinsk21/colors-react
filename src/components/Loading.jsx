import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box width={280} marginRight={2} my={5}>
      <Skeleton
        variant="rect"
        width={280}
        height={118}
        className={classes.container}
      >
        <Typography align="center">Loading...</Typography>
      </Skeleton>
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
};

export default Loading;
