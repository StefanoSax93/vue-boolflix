<template>
    <div class="flex-grow-1 bg-secondary overflow-auto">
        <div class="container p-5" v-for="movie in moviesList" :key="movie.id">
            <StampCard :movie="movie"></StampCard>
        </div>
    </div>
</template>

<script>
import {state} from '../store';
import StampCard from './StampCard.vue';

export default {
    name: 'TheMain',
    components: { StampCard },

    computed: {
        moviesList() {
            return state.moviesList;
        }
    }
}
</script>

<style lang="scss">

</style>