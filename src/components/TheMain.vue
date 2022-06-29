<template>
    <div class="flex-grow-1 bg-secondary overflow-auto">
        <div class="container p-5">
            <div class="d-flex flex-wrap justify-content-center gap-5">
                <div v-for="movie in moviesList" :key="movie.id" class="d-flex justify-content-start">
                    <StampCard :movie="movie"></StampCard>
                </div>
            </div>
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