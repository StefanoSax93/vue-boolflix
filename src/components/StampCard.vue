<template>
        <div>
            <div class="mb-3 w-100 position-relative poster">
                    <img :src="`http://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="" @error="onImgError">
                    <div class="card-overlay text-white p-3">
                        <div v-if="movie.title"><strong>Titolo:</strong> {{movie.title}}</div>
                        <div v-else-if="movie.original_name"><strong>Titolo:</strong> {{movie.name}}</div>
                        <div v-if="movie.title"><strong>Titolo originale:</strong> {{movie.original_title}}</div>
                        <div v-else-if="movie.original_name"><strong>Titolo originale:</strong> {{movie.original_name}}</div>
                        <div><strong>Lingua:</strong> <lang-flag :iso="movie.original_language" class="rounded"/></div>
                        <div><strong>Voto:</strong> {{transformVote(movie.vote_average)}}</div>
                        <div><i class="fa-solid fa-star"></i></div>
                    </div>
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
    methods: {
        transformVote(vote) {
            return Math.ceil((vote) / 2);
        },
        onImgError(event) {
            event.target.src = 'https://via.placeholder.com/342x512';
        },
        
    }
}
</script>

<style lang="scss">
.poster {
    height: 512px;

    img{
        min-width: 342px;
        height: 100%;
    }
}

.card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.8);
        transition: all .3s ease-in-out;
        opacity: 0;

        &:hover {
            opacity: 1;
            border: 3px solid white;
        }
    }
</style>