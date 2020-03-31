import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './style';

const MovieResult = ({ history, Title, Year, Type, Poster, imdbID }) => {
  // Title, Year, Type, Poster, imdbID
  const classes = style();
  const handleSeeMovieClick = () => {
    history.push(`/movie/${imdbID}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained" onClick={handleSeeMovieClick}>
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

MovieResult.propTypes = {
  Object: PropTypes.object,
  Title: PropTypes.string,
  Year: PropTypes.string,
  Type: PropTypes.string,
  Poster: PropTypes.string,
  imdbID: PropTypes.string,
  history: PropTypes.object,
};

export default withRouter(MovieResult);
