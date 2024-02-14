<script setup>
import { RouterLink } from "vue-router"
import TheHeader from "../components/Header.vue"
import TheFooter from "../components/Footer.vue"
</script>

<template>
    <section>
        <h1>404</h1>
        <img src="../components/images/computer.png">
        <p>Page not found</p>
        <p>The page does not exist please return to home :</p>
        <RouterLink to="/">Home</RouterLink>
    </section>
</template>

<style scoped>

    section {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        color: #323232;
        align-items: center;
        justify-content: center;
        font-size: 1,5rem;
    }

    h1  {
        font-size: 5rem;
        color: #323232;
        font-weight: bold;
    }

    img {
        height: 200px;
        width: 200px;
        margin: 30px 0;
    }

    a {
        color: white;
        margin-top: 20px;
        border: 2px solid #323232;
        padding: 5px;
        border-radius: 2px;
        background-color: rgb(32, 32, 32);
    }
</style>