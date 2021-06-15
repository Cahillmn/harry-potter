<template>
<header>
    <img class="banner" src="./assets/banner.png" alt="Harry Potter logo">
  </header>
  <div id="app">
    <nav>
    <ul>
    <li><router-link to="/">Home</router-link></li> 
    <li><font-awesome-icon :icon="['fas', 'bolt']" /></li>
    <li><router-link to="/blog">Blog</router-link></li>
    <li><font-awesome-icon :icon="['fas', 'bolt']" /></li>
    <li><router-link to="/characters">Characters</router-link></li> 
    <li><font-awesome-icon :icon="['fas', 'bolt']" /></li>
    <li><router-link to="/store">Store</router-link></li> 
    </ul>
    </nav>
  </div>
  <router-view/>
  <footer>
        <p>&copy; Copyright 2021</p>
        <p>Store images from https://harrypottershop.com</p>
        <p>Book images from https://amazon.com</p>
    
    </footer>

</template>

<script>


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'App',
  components: {
      FontAwesomeIcon
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

header {
    background-color: black;

    .banner {
        height: 250px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;

    }
}

nav {
    background-color: rgb(121, 80, 27);

    a {
        text-decoration: none;
        font-weight: bold;
    }

    ul {
        display: flex;
        flex-direction: row;

    }

    li {
        color: gold;
        list-style-type: none;
        padding: 1rem;
        padding-right: 1.5rem;
        transition: transform 2s;

        a {
            color: gold;
        }
    }

    li:hover {
        transform: scale(1.25, 1.25);
    }
}

body {
    background-color: lightgoldenrodyellow;

}

main {
    min-height: 400px;

    h1 {
        color: brown;
        padding-top: 3rem;
        text-align: center;

    }

    

    h2 {
        color: brown;
        text-align: center;

    }

    
}

footer {
    min-height: 7rem;
    background-color: black;
    padding-top: 2rem;
    margin-top: 2rem;
    text-align:center;

    p {
    color: gold;
    padding-top: .5rem;
    }
}
</style>
