<template>
    <div class="flex-shrink-0 bg-dark p-3">
        <div class="d-flex  flex-column flex-md-row justify-content-between align-items-center">
            <img src="../../public/img/logo.png" alt="" class="logo">
            <div class="input-group">
                <input type="text" v-model="searchText" class="form-control" placeholder="Cerca un film o una serie TV" @keyup.enter="searchMovies">
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
            searchText: '',
        }
    },
    
    methods: {
        searchMovies() {

            searchMovies(this.searchText,"movie");
            searchMovies(this.searchText,"tv");
            this.searchText = '';
        }
    }
}

</script>

<style lang="scss" scoped>
.logo {
    max-width: 300px;
}
.input-group {
    max-width: 400px;
}
</style>