<template>
    <div class="flex-shrink-0 bg-dark p-3">
        <div class="d-flex justify-content-between align-items-center">
            <div class="display-3 fw-bold text-danger text-uppercase">boolflix</div>
            <div class="input-group">
                <input type="text" v-model="searchText" class="form-control" placeholder="Cerca un film" @keyup.enter="searchMovies">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchMovies">Cerca</button>
            </div>
        </div>
    </div>
</template>

<script>
import { searchMovies } from '../store';

export default {
    name: 'TheHeader',
    data() {
        return {
            searchText: ''
        }
    },

    methods: {
        searchMovies() {
            searchMovies(this.searchText);
        }
    }
}

</script>

<style lang="scss" scoped>
.input-group {
    max-width: 400px;
}
</style>