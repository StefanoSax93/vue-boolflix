import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({ 
    moviesList: [],
    seriesList: [],
    clicked: false,
    loading: false,
});

export function searchMovies(searchText,type) {

    state.loading = true;

    axios
        .get("https://api.themoviedb.org/3/search/" + type, {
            params: {
                api_key: "5199994b52f8293fde21362444fcd134",
                query: searchText,
                language: "it-IT",
        },
    })
    .then((resp) => {
        if(type === "movie"){
        state.moviesList = resp.data.results;
        } else if (type === "tv"){
            state.seriesList = resp.data.results;
        }
        
        console.log(state.moviesList);
        console.log(state.seriesList);

        setTimeout(() => {
            state.clicked = true;
        }, 1000);

        state.loading = false;
    })
    .catch(() => {
        alert("A causa di un errore l'operazione non è andata a buon fine")
    });
}