<script setup>
import TheHeader from "../components/Header.vue"
import TheFooter from "../components/Footer.vue"
import Slideshow from "../components/Slideshow.vue"
import Contact from "../components/Contact.vue"

</script>


<template>
    <div class="page-container">
        <TheHeader></TheHeader>
         <!-- Configuration du contenu principal -->
        <section class="main">
                <a id="presentation"></a>
                <section class="Bonjour">
                    <h1>Bonjour !</h1>
                    <p>Je m'appelle Alexis Rambeau, Je suis étudiant dans le domaine développement web.
                    Pour le moment, je n'ai pas créé de site Web, mais tous mes projets peuvent être vus ici.
                    </p>
                    <br/>
                </section>
            <Slideshow></Slideshow>
            <Contact></Contact>
        
        </section>
        <TheFooter></TheFooter>
    </div>
  
</template>

<style scoped>

.Bonjour {
    display: flex;
    text-align: center;
    max-width: 755px;
    flex-direction: column;
    align-items: center;
}
.page-container {
    display: flex;
    flex-direction: column;
}

.main section{
  margin-left: 130px;
  margin-top: 80px;
  color: #323232;
 }

 .main a {
  text-decoration: none;
  color: white;
  max-width: 300px;
 }

 .main h1 {
    display: center;
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 15px;
 }


 p {
  font-size: 1.2rem;
  width: 700px;
 }

</style>