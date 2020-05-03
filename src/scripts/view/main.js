import '../component/search-bar';
import '../component/movie-list';
import '../component/detail-movie';
import DataSource from '../data/data-source';

const main = async () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');
  movieListElement.classList.add('row', 'd-flex', 'justify-content-center');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      swal('Oopss..', message, 'error');
    }
  };

  // klik button search
  searchElement.clickEvent = onButtonSearchClicked;

  // Menampilkan movie berdasarkan input search
  const renderResult = (results) => {
    // kosongkan input search
    $('#search-input').val('');
    movieListElement.movies = results;
  };

  const detailMovieElement = document.createElement('detail-movie');
  // See Detail Movie
  $('movie-list').on('click', '.see-detail', async function() {
    try {
      const detailMovie = await DataSource.detailMovie($(this).data('id'));
      renderDetailMovie(detailMovie);
    } catch (message) {
      swal('Oopss..', message, 'error');
    }
  });

  // display detail movie
  const renderDetailMovie = (detailMovieResults) => {
    detailMovieElement.detailMovie = detailMovieResults;
  };
};

export default main;
