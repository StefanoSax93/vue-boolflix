<template>
        <div>
            <div class="mb-3 w-100 position-relative poster" @mouseover="getActors(product.id)">
                    <img :src="`http://image.tmdb.org/t/p/w342/${product.poster_path}`" alt="" @error="onImgError">
                    <div class="card-overlay text-white p-3 overflow-auto">
                        <div v-if="product.title"><strong>Titolo:</strong> {{product.title}}</div>
                        <div v-else-if="product.original_name"><strong>Titolo:</strong> {{product.name}}</div>
                        <div v-if="product.title"><strong>Titolo originale:</strong> {{product.original_title}}</div>
                        <div v-else-if="product.original_name"><strong>Titolo originale:</strong> {{product.original_name}}</div>
                        <div><strong>Lingua:</strong> <lang-flag :iso="product.original_language" class="rounded"/></div>
                        <div>
                            <strong>Voto:</strong> 
                                <span v-for="i in 5" :key="i" class="ms-2">
                                    <i class="fa-solid fa-star text-secondary" :class="{'text-warning' : i <= transformVote(product.vote_average)}"></i>
                                </span>
                        </div>
                        <div v-if="product.overview"><strong>Overview:</strong> {{product.overview}}</div>
                        <div v-else><strong>Overview:</strong> Non disponibile</div>
                        <span><strong>Cast:</strong></span>
                        <span v-for="actor in actorsList" :key="actor.id">
                            {{actor.name}}, 
                        </span>
                    </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'StampCard',
    components: { LangFlag },
    data() {
        return {
            actorsList: [],
        }
    },
    props: {
        product: Object,
    },
    methods: {
        transformVote(vote) {
            return Math.ceil((vote) / 2);
        },
        onImgError(event) {
            event.target.src = "img/imgError.png";
        },
        getActors(id) {
            axios
                .get('https://api.themoviedb.org/3/movie/' + id + '/credits?&api_key=5199994b52f8293fde21362444fcd134')
                .then((resp) => {
                    while(this.actorsList.length < 5) {
                        this.actorsList.push(...resp.data.cast);
                    }
                        
                    console.log(this.actorsList);
                })
        }
    }
}
</script>

<style lang="scss">
.poster {
    height: 512px;

    img{
        min-width: 342px;
        max-width: 342px;
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

        div {
            margin-bottom: 20px;
        }
    }
</style>