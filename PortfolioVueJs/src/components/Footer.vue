<template>
    <footer>
        <nav>
            <a href="https://github.com/SINJ1" target="_blank">
                <div class="github-icon"></div>
            </a>
            <a href="https://www.linkedin.com/in/alexis-rambeau-6173892a9/" target="_blank">
                <div class="indeed-icon"></div>
            </a>
        </nav>
        <p>Mise a jour le <time datetime="2024-02-05">05/02/2024</time></p>
    </footer>
</template>

<style scoped>

    footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }

    nav{
        margin: 0;
        display: flex;
        gap: 25px;
        margin-bottom: 15px;
    }

    a div {
        height: 60px;
        width: 60px;
        background-size: cover;
    }

    a div:hover {
        opacity: 45%;
    }

    a {
        height: 60px;
        width: 60px;
    }

    a div.github-icon {
        background-image: url(./icons/github.png);
    }

    a div.indeed-icon {
        background-image: url(./icons/linkedin.png);
    }
</style>