<script setup>
import { ref } from "vue"

const button = ref(null);

const props = defineProps(["display"])

function preventSubmit(event) {
    event.preventDefault();
}

function executeFunction() {
    preventSubmit(event);
}

</script>

<template>  
    <section id="contact">
        <form action="mailto:alexis.rambeau0@gmail.com" method="post" enctype="plain/text">
            <h2>Contactez moi !</h2>
            <div class="input-container">
                <input type="text" id="lastname" placeholder="Nom">
            </div>
            <div class="input-container">
                <input type="text" id="name" placeholder="Prénom">
            </div>
            <div class="input-container">
                <input type="text" id="object" placeholder="Objet">
            </div>
            <div class="input-container">
                <textarea id="message" rows="10" cols="40" name="message"></textarea>
            </div>
            <button type="submit" ref="button"  value="send">Envoyer</button>
        </form>
    </section>
</template>

<style scoped>
    section#contact {
        display: flex;
        justify-content: center;
        margin-left: 0px;
        margin-top: 250px;
        margin-bottom: 100px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 700px;
        border-radius: 15px;
    }

    h2{
        text-align: center;
        font-weight: bold;
        height: 35px;
        color: #323232;
        border-top-left-radius: 13px;
        border-top-right-radius: 13px;
    }

    input,
 textarea {
  color: #000;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
 }
 button {
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

 button:hover {
  background-color: #45a049;
 }
    
</style>