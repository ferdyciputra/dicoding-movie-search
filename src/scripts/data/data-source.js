class DataSource {
    static async searchMovie(keyword) {
        //Get Data Movie From API
        const baseUrl = new URL('http://www.omdbapi.com/')

        //set query params
        baseUrl.search = new URLSearchParams({ apikey: 'c5a035b4', s: `${keyword}` });

        // Send Response
        const response = await fetch(baseUrl.toString());
        const responseJson = await response.json();

        if (responseJson.Search) {
            return Promise.resolve(responseJson.Search);
        } else {
            return Promise.reject(responseJson.Error);
        }
    }

    static async detailMovie(id) {
        //Get Data Movie From API
        const baseUrl = new URL('http://www.omdbapi.com/')

        //set query params
        baseUrl.search = new URLSearchParams({ apikey: 'c5a035b4', i: `${id}` });

        // Send Response
        const response = await fetch(baseUrl.toString());
        const responseJson = await response.json();

        if (responseJson.Response === "True") {
            return Promise.resolve(responseJson);
        } else {
            return Promise.reject(responseJson.Error);
        }
    }
}
export default DataSource;