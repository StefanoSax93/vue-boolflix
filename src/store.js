import Vue from 'vue';
import axios from 'axios';

export const state = Vue.observable({ 
    moviesList: [],
    seriesList: [],
    clicked: false,
});

export function searchMovies(searchText,type) {
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
        state.clicked = true;
    })
}