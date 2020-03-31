import { makeStyles } from '@material-ui/styles';

const centerdStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default makeStyles({
  container: {
    height: '100vh',
    flexDirection: 'column',
    ...centerdStyleObj,
  },
  cardContainer: {
    flexDirection: 'column',
    width: 400,
    height: 200,
    padding: '2rem',
    ...centerdStyleObj,
  },
  title: {
    fontSize: '4rem',
  },
  titleGridContainer: {
    ...centerdStyleObj,
  },
  textFieldSearch: {
    width: '90%',
  },
  searchButton: { marginLeft: '.5rem' },
  buttonsContainer: { marginTop: '.5rem' },
  movieIcon: { fontSize: '2rem' },
});
