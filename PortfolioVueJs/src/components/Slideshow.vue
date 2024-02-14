<script setup>
import { onMounted, ref, watch } from "vue";
import {useModalStore} from "../stores/modal"
import Modal from "./ModalProject.vue"


let store = useModalStore();
let slides = store.slideArray
let display = ref(false);
let title = ref("");
let date = ref("");
let technology = ref("");
let links = ref("");
let imageLinks = ref("");

function openModal() {
    display.value = true;
}

//Récupérez les données des diapositives du magasin, puis attribuez-les à des variables
function getDataForModal(slide) {
    title.value = slide.title;
    date.value = slide.date;
    technology.value = slide.technology;
    links.value = slide.link;
    imageLinks.value = slide.imageLinks;

}

function executeFunction(slide) {
    getDataForModal(slide);
    openModal();
}

function handleCloseModal() {
    display.value = false;
}


//Créez une fonction de surveillance pour vérifier quand le modal est ouvert et un auditeur quand c'est vrai
watch(display, (newValue, oldValue) => {
    if(newValue === true) {

        //Ajouter un délai d'attente pour empêcher le modal de se fermer directement

        setTimeout(() => {
            function clickHandler() {
                let modal = document.querySelector(".modal-container");

                //fermez modal si vous cliquez à l'extérieur et seulement à l'extérieur de celui-ci
                if(modal && !modal.contains(event.target)) {
                    handleCloseModal();
                }
            }

            window.addEventListener("mousedown", clickHandler)

            //Nous regardons à nouveau la valeur pour voir quand nous pouvons supprimer l'auditeur
            watch(display, (newValue) => {
                //lorsque l'affichage revient à sa valeur par défaut, supprimez evenListener
                if(newValue === false) {
                    window.removeEventListener("mousedown", clickHandler)
                }
            })
        }, 200)
    }
})
</script>

<template>
    <!-- Créer une ancre pour le lien d'ancrage -->
    <a class="anchor" id="project"></a>
    <h2 class="project-title-section">Projets</h2>
    <section class="slideshow-container">
        <ul class="slideshow">
            <li class="slideshow__item" v-for="slide in slides" :key="slide.id" @click="executeFunction(slide)">
                <h3 class="item__title">{{ slide.title }}</h3>
                <div class="item__background-image" :style="{'background-image': 'url('+ slide.imageLinks + ')'}"></div>
            </li>
        </ul>
    </section>
    <Modal :display="display" :title="title" :date="date" :technology="technology" :links="links" :imageLinks="imageLinks"  @close="handleCloseModal"></Modal>
</template>

<style>
    .project-title-section {
        text-align: center; 
        font-size: 2.3rem;
        font-weight: bold;
        color: #323232;
        margin-top: 50px;
        margin-left: 40px;
    }

    a.anchor{
        display: block; 
        position: relative; 
        top: -50px; 
        visibility: hidden;
    }

    .slideshow {
        display: grid;
        grid-template-columns: repeat(2, 0fr);
        align-items: center;
        gap: 2.5rem;
        height: 500px;
        justify-content: center;
}

    .slideshow__item {
        list-style-type: none;
    }

    .item__background-image {
        background-size: cover;
        background-repeat: no-repeat;
        height: 290px;
        width: 500px;
        margin-top: 10px;
        filter: blur(2px);
        border-radius: 15px;
        transition-duration: 450ms;
        margin: 10px;
    }

    .item__background-image:hover {
        transition-duration: 450ms;
        filter: blur(0);
        box-shadow: 8px 8px 10px #323232;
    }

    .item__title {
        position: relative;
        z-index: 1;
        text-align: center;
        color: #323232;
        font-weight: bold;
    }
</style>