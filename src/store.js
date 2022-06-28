import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({ 
    seriesList: [],
    moviesList: [],
});

export function searchMovies(searchText) {
    
    axios
        .get("https://api.themoviedb.org/3/search/movie", {
            params: {
                api_key: "5199994b52f8293fde21362444fcd134",
                query: searchText,
                language: "it-IT",
        },
    })
    .then((resp) => {
        state.moviesList = resp.data.results;
        console.log(state.moviesList);
    });
}