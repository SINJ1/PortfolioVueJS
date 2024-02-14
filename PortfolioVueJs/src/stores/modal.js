import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore("modal", ()=> {
    let title = ref("");
    let date = ref("");
    let technology = ref("");
    let links = ref("");
    let imageLinks = ref("");
    let display = ref("");

    let id = 0;

    //Créez le tableau pour les informations stockées à l'intérieur de la diapositive dans le diaporama
    let slideArray = ref([
        {
            id: id++,
            title: "Portfolio",
            date: "10 décembre 2024",
            technology: "HTML, CSS",
            link:"https://github.com/SINJ1/Portfolio.git",
            imageLinks: "./src/components/images/CV.png"
        },
        {
            id: id++,
            title: "Master Card UI",
            date: "05 décembre 2023",
            technology: "HTML, CSS",
            link:"https://github.com/SINJ1/Master-Card-UI",
            imageLinks: "./src/components/images/MasterCard.png"
        },
        {
            id: id++,
            title: "Dynamiser un espace commentaires",
            date: "05 janvier 2024",
            technology: "HTML, JS",
            link:"https://github.com/SINJ1/DynamiserUnEspaceDeCommentaires",
            imageLinks: "./src/components/images/DynamiserUnEspaceCommentaires.png"
        },
        {
            id: id++,
            title: "Page de connexion",
            date: "06 décembre 2023",
            technology: "HTML,CSS",
            link:"https://github.com/SINJ1/Page-Login.git",
            imageLinks: "./src/components/images/Login.png"
        },
        
    ])

    return{ title, date, technology, links, imageLinks, slideArray }
    
})