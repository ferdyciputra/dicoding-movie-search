import "../component/search-bar";
import DataSource from "../data/data-source";

const main = async() => {
    const searchElement = document.querySelector("search-bar");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            swal("Oopss..", message, "error");
        }
    }

    // klik button search
    searchElement.clickEvent = onButtonSearchClicked;

    // Menampilkan movie berdasarkan input search
    const renderResult = results => {
        // kosongkan input search
        $('#search-input').val('');

        // kosongkan isi movie-list sebelum menampilkan response movie
        $('#movie-list').html('');

        //menampilkan response API menggunakan JQuery
        $.each(results, function(i, movie) {
            $('#movie-list').append(`
            <div class="col-md-2 movie-item">
                <div class="card mb-3">
                    <img class="card-img-top img-fluid" src="` + movie.Poster + `" alt="Card image cap">
                        <div class="card-body">
                            <h6 class="card-title font-weight-bold">` + movie.Title + `</h6>
                            <h6 class="card-subtitle mb-2 text-muted">` + movie.Year + `</h6>
                            <button class="btn btn-primary btn-sm see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + movie.imdbID + `">See Detail</button>
                        </div>
                </div>
            </div>`)
        })
    }

    //See Detail Movie
    $('#movie-list').on('click', '.see-detail', async function() {
        try {
            const detailMovie = await DataSource.detailMovie($(this).data('id'));
            renderDetailMovie(detailMovie);
        } catch (message) {
            swal("Oopss..", message, "error");
        }
    })

    const renderDetailMovie = detailMovie => {
        $('.modal-body').html(`
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <img src="` + detailMovie.Poster + `" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <ul class="list-group">
                        <li class="list-group-item"><h3>` + detailMovie.Title + `</h3></li>
                        <li class="list-group-item"><span class="font-weight-bold">Released :</span> ` + detailMovie.Released + `</li>
                        <li class="list-group-item"><span class="font-weight-bold">Genre : </span>` + detailMovie.Genre + `</li>
                        <li class="list-group-item"><span class="font-weight-bold">Director : </span>` + detailMovie.Director + `</li>
                        <li class="list-group-item"><span class="font-weight-bold">Actor : </span>` + detailMovie.Actors + `</li>                                    
                    </ul>
                </div>
            </div>
        </div>
    `);
    }
};

export default main;