<script setup>
import { onMounted, ref } from 'vue';
import {useModalStore} from '../stores/modal'


const props = defineProps(['display', 'title', 'date', 'technology', 'links', 'imageLinks'])

function closeDisplay() {
    display.value = false;
}
</script>

<template>
    <section class="modal-container" v-if="display">
        <div class="data-holder">
            <h2 id="modal-title">{{ title }}</h2>
        </div>
        <div class="data-holder">
            <h3 class="title">Date : </h3>
            <p>{{ date }}</p>
        </div>
        <div class="data-holder">
            <h3 class="title">Technologie : </h3>
            <p>{{ technology }}</p>
        </div>
        <div class="data-holder">
            <h3 class="title">Lien vers le dépôt : </h3>
            <a :href="links" target="_blank" class="link">Click here</a>
        </div>
        <div class="data-holder">
            <h3 class="title">Lien vers un exemple d'image : </h3>
            <a :href="imageLinks" target="_blank" class="link">Open me</a>
        </div>
        <div class="button-container">
            <button type="button" class="form__close-button" style="top: 3px;" @click="$emit('close')">X</button>
        </div>
    </section>
</template>

<style scoped>
    .modal-container {
        display: flex;
        position : fixed;
        width: 420px;
        flex-direction: column;
        left: 50%;
        top: 50%;
        transform: translateY(-50%);
        transform: translate(-50%, -50%);
        border-radius: 10px;
        padding: 15px; 
        color: #fff;
        background-color: #32323296;
        backdrop-filter: blur(4px);
        align-items: center;
        z-index: 9999;
    }

    .form__close-button {
        position: absolute;
        top: -10px;
        right: 5px;
        border-radius: 40%;
        width: 30px;
        height: 30px;
        font-weight: bold;
    }
    
    #modal-title {
        font-weight: bold;
        font-size: 1.3rem;
    }

    .title {
        font-weight: bold;
    }

    .data-holder .link {
        text-decoration: none;
        color: #ffffff;
        font-weight: bolder;
        border: 2px solid #ffffff;
        border-radius: 10px;
    }
    
    .data-holder {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 15px;
        padding-bottom: 19px;
    }
</style>