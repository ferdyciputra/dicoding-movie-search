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

    const renderResult = results => {
        $('#search-input').val('');
        //menampilkan response API menggynakan JQuery
        $.each(results, function(i, movie) {
            $('#movie-list').append(`
            <div class="col-md-2 movie-item">
                <div class="card mb-3">
                    <img class="card-img-top" src="` + movie.Poster + `" alt="Card image cap">
                        <div class="card-body">
                            <h6 class="card-title font-weight-bold">` + movie.Title + `</h6>
                            <h6 class="card-subtitle mb-2 text-muted">` + movie.Year + `</h6>
                            <button class="btn btn-primary btn-sm see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + movie.imdbID + `">See Detail</button>
                        </div>
                </div>
            </div>`)
        })
    }

    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;