import React, { useState } from 'react';
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './style';
import MovieIcon from '../../icons/index';

const Home = ({ history }) => {
  const [searchText, setSearchText] = useState('');
  const classes = styles(); // funcion del makeStyles -- tienen que llamarse igual

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleSearchTextClick = () => {
    history.push(`/results?movieName=${searchText}`);
  };

  const handleCleanTextClick = () => {
    setSearchText('');
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Typography className={classes.title}>Bienvenido!</Typography>
        </Grid>
        <Grid>
          <MovieIcon className={classes.movieIcon} />
        </Grid>
        <TextField
          value={searchText}
          className={classes.textFieldSearch}
          placeholder="Buscar ..."
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonContainer}>
          <Button variant="contained" onClick={handleCleanTextClick}>
            Limpiar
          </Button>
          <Button
            variant="contained"
            className={classes.searchButton}
            color="primary"
            size="large"
            onClick={handleSearchTextClick}
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
