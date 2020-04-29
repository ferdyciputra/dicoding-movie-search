import "../component/search-bar";
import DataSource from "../data/data-source";

const main = async() => {
    try {
        const result = await DataSource.searchMovie('turtle')
        console.log(result);
    } catch (message) {
        console.log(message)
    }
};

main();