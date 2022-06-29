<template>
        <div v-if="loading" class="loader bg-secondary text-white">
            <div class="spinner-border"></div>
        </div>
</template>

<script>
import {state} from '../store';
export default {
    
    computed: {
        loading() {
            return state.loading;
        }
    }
}
</script>

<style lang="scss">
.loader {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
}
</style>