import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';

const Results = ({ location }) => {
  // console.log("Redux index")
  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchLoading(state));
  // console.log(movies);
  const [isLooked, setIsLooked] = useState(false);

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    // console.log("Use effect",movieName);

    if (movieName && !isLooked) {
      setIsLooked(true);
      dispatch(searchMovie({ movieName }));
    }
  });

  const renderMovies = () => {
    if (movies) {
      // console.log('renderMovies', movies);
      // eslint-disable-next-line react/no-array-index-key
      return movies.map((value, index) => <MovieResult key={index} {...value} />);
    }
    if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    }

    return <div />;
  };

  return <Container>{renderMovies()}</Container>;
};

Results.propTypes = {
  location: PropTypes.object,
};

export default Results;
