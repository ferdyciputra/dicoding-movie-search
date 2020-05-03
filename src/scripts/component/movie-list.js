import './movie-item';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.classList.add('col-md-2');
      // * set data movie ke method club di movie-item.js
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }
}

customElements.define('movie-list', MovieList);
