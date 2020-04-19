import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';

// Actions
import { connect } from 'react-redux';
import { getAllColors } from '../actions';

// Custom components
import Color from './Color';
import ContentMessage from './ContentMessage';
import Loading from './Loading';

const styles = theme => ({
  cardGrid: {
    paddingTop: 15,
    paddingBottom: 15
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  }
});

class ColorList extends Component {
  componentDidMount() {
    this.getColors();
  }

  copyToClipboard = color => {
    const body = document.getElementsByTagName('body')[0];
    const input = document.createElement('input');

    body.appendChild(input);
    input.setAttribute('value', color);
    input.select();
    document.execCommand('copy');
    body.removeChild(input);
  };

  handleChange = (e, value) => {
    const { page } = this.props;
    if (value !== page) this.getColors({ page: value });
  };

  getColors = async (q = null) => {
    const { get } = this.props;
    await get(q);
  };

  render() {
    const { classes, loading, error, list, totalPages, page } = this.props;

    return (
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container justify="center" spacing={4}>
          {!error &&
            loading &&
            [1, 2, 3, 4, 5, 6].map(key => <Loading key={key} />)}

          <Grid item xs={12}>
            {error && (
              <ContentMessage
                color="error"
                message="Sorry an error has occurred"
                fn={this.getColors}
                fnName="Reload data"
              />
            )}

            {!loading && list.length === 0 && (
              <ContentMessage
                color="warning"
                message="OMG No data recieved"
                fn={this.getColors}
                fnName="Reload data"
              />
            )}
          </Grid>

          {!error && !loading && list.length > 0 && (
            <>
              {list.map((card, i) => (
                <Color
                  key={i}
                  {...card}
                  copy={() => this.copyToClipboard(card.color)}
                />
              ))}

              <Pagination
                count={totalPages}
                page={page}
                color="secondary"
                onChange={this.handleChange}
              />
            </>
          )}
        </Grid>
      </Container>
    );
  }
}

ColorList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  get: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

const mapStateToProps = state => ({
  ...state.colors
});

const actionCreators = {
  get: getAllColors
};

export default connect(
  mapStateToProps,
  actionCreators
)(withStyles(styles)(ColorList));
