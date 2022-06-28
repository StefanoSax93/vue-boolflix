<template>
    <div>
        <!-- se è un movie -->
        <div>
            <ul class="list-unstyled">
                <li class="mb-3">
                    <div>{{`Titolo: ${movie.title}`}}</div>
                    <div>{{`Titolo originale: ${movie.original_title}`}}</div>
                    <div>Lingua: <lang-flag :iso="movie.original_language" class="rounded"/></div>
                    <div>{{`Voto: ${movie.vote_average}`}}</div>
                </li>
            </ul>
        </div>
    <!-- se è una serie -->
        <div>
            <ul class="list-unstyled">
                <li class="mb-3">
                    <div>{{`Titolo: ${movie.name}`}}</div>
                    <div>{{`Titolo originale: ${movie.original_name}`}}</div>
                    <div>Lingua: <lang-flag :iso="movie.original_language" class="rounded"/></div>
                    <div>{{`Voto: ${movie.vote_average}`}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'StampCard',
    components: { LangFlag },
    props: {
        movie: Object,
    },
    mehtods: {
        
    },
    
}
</script>

<style lang="scss">

</style>