/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    textTransform: 'capitalize'
  },
  cardContent: {
    flexGrow: 1
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const Color = ({ name, color, pantone_value, year, copy }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        className={classes.card}
        style={{ backgroundColor: color }}
        onClick={copy}
      >
        <CardHeader title={year} />
        <CardContent className={classes.cardContent}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {name}
            <Divider />
            {color}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography gutterBottom component="span">
            {pantone_value}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

Color.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  pantone_value: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  copy: PropTypes.func.isRequired
};

export default Color;
