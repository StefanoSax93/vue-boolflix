<template>
    <div class="flex-grow-1 bg-secondary">
        <div class="container p-5">
            <ul class="list-unstyled">
                <li v-for="movie in moviesList" :key="movie.id" class="mb-3">
                    <div>{{`Titolo: ${movie.title}`}}</div>
                    <div>{{`Titolo originale: ${movie.original_title}`}}</div>
                    <div>{{`Lingua: ${movie.original_language}`}}</div>
                    <div>{{`Voto: ${movie.vote_average}`}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {state} from '../store';

export default {
    name: 'TheMain',
    components: {},

    computed: {
        moviesList() {
            return state.moviesList;
        }
    }
}
</script>

<style lang="scss">

</style>