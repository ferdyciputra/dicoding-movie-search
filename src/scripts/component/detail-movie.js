class DetailMovie extends HTMLElement {
  set detailMovie(id) {
    this._detailMovie = id;
    this.render();
  }

  render() {
    $('.modal-body').html(`
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <img src="` + this._detailMovie.Poster + `" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <ul class="list-group">
                        <li class="list-group-item"><h3>` + this._detailMovie.Title + `</h3></li>
                        <li class="list-group-item"><span class="font-weight-bold">Released :</span> ` + this._detailMovie.Released + `</li>
                        <li class="list-group-item"><span class="font-weight-bold">Genre : </span>` + this._detailMovie.Genre + `</li>
                        <li class="list-group-item"><span class="font-weight-bold">Director : </span>` + this._detailMovie.Director + `</li>
                        <li class="list-group-item"><span class="font-weight-bold">Actor : </span>` + this._detailMovie.Actors + `</li>                                    
                    </ul>
                </div>
            </div>
        </div>`);
  }
}

customElements.define('detail-movie', DetailMovie);
