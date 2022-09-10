<template>
    <div class="flex-grow-1 bg-secondary overflow-auto">
        <div class="container p-5">
            <div class="text-uppercase text-center text-danger mb-5 display-2 fw-bold">film</div>
            <div class="d-flex flex-wrap gap-5 justify-content-center">
                <div v-for="movie in moviesList" :key="movie.id">
                        <StampCard :product="movie"></StampCard>
                </div>
            </div> 
            <div  v-if="moviesList.length === 0 && clicked()">
                <div class="alert alert-warning text-dark fw-bold">Nessun risultato trovato</div>
            </div>   
        </div>
        <div class="py-3 bg-dark"></div>
        <div class="container p-5">
            <div class="text-uppercase text-center text-danger mb-5 display-2 fw-bold">serie tv</div>
            <div class="d-flex flex-wrap gap-5 justify-content-center">
                <div v-for="serie in seriesList" :key="serie.id">
                        <StampCard :product="serie"></StampCard>
                </div>
            </div> 
            <div  v-if="seriesList.length === 0 && clicked()">
                <div class="alert alert-warning text-dark fw-bold">Nessun risultato trovato</div>
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
    methods: {
        clicked() {
            return state.clicked;
        },
    },
    computed: {
        moviesList() {
            return state.moviesList;
        },
        seriesList() {
            return state.seriesList;
        },
    }
}
</script>

<style lang="scss">

</style>