// to adapt euan's code to work for the netflix style, 
// problem 1: clicking the button will scroll browser to the row
//            might be considered feature instead of bug
// problem 2: each row's button reference the same section id, doesnt allow for scrolling properly
// euan the great shall solve all of these issues 
<template>
    <div class="wrapper">
    <section id="section1">
        <a href="#section3" class="arrow__btn">‹</a>
            <div class="item" 
                v-for="anime in popular1"
                :key="anime.mal_id"
                :anime="anime"
                :id="anime.mal_id"
                >
                <img :src="anime.image_url">
            </div>
        <a href="#section2" class="arrow__btn">›</a>
    </section>

    <section id="section2">
        <a href="#section1" class="arrow__btn">‹</a>
            <div class="item" 
                v-for="anime in popular2"
                :key="anime.mal_id"
                :anime="anime"
                :id="anime.mal_id"
                >
                <img :src="anime.image_url">
            </div>
        <a href="#section3" class="arrow__btn">›</a>
    </section>

    <section id="section3">
        <a href="#section2" class="arrow__btn">‹</a>
            <div class="item" 
                v-for="anime in popular3"
                :key="anime.mal_id"
                :anime="anime"
                :id="anime.mal_id"
                >
                <img :src="anime.image_url">
            </div>
        <a href="#section4" class="arrow__btn">›</a>
    </section>

    <section id="section4">
        <a href="#section3" class="arrow__btn">‹</a>
            <span class="item" 
                v-for="anime in popular4"
                :key="anime.mal_id"
                :anime="anime"
                :id="anime.mal_id"
                >
                <img :src="anime.image_url">
            </span>
        <a href="#section5" class="arrow__btn">›</a>
    </section>

    <section id="section5">
        <a href="#section4" class="arrow__btn">‹</a>
            <span class="item" 
                v-for="anime in popular5"
                :key="anime.mal_id"
                :anime="anime"
                :id="anime.mal_id"
                >
                <img :src="anime.image_url">
            </span>
        <a href="#section1" class="arrow__btn">›</a>
    </section>
    </div>
</template>

<script>
import axios from "axios";
import { UpdateFieldsInADocument } from '/firebase'
export default {
	props: ['anime','id'],
    data() {
        return {
            popular1: [],
            popular2: [],
            popular3: [],
            popular4: [],
            popular5: [],
            
            
        }
    },
    created:
        function() {
            let api_endpoint = "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1"
            axios.get(api_endpoint)
            .then(response => {
                let counter = 0
                let popularlist = response.data.results
                for ( let anime of popularlist ) {
                    // console.log(anime)
                    // console.log(anime.image_url)
                    if ( 0<= counter && counter <= 9 ) {
                        this.popular1.push(anime)
                    }
                    else if ( 10<= counter && counter <= 19 ) {
                        this.popular2.push(anime)
                    }
                    else if ( 20<= counter && counter <= 29 ) {
                        this.popular3.push(anime)
                    }
                    else if ( 30<= counter && counter <= 39 ) {
                        this.popular4.push(anime)
                    }
                    else if ( 40<= counter && counter <= 49 ) {
                        this.popular5.push(anime)
                    }
                    counter ++
                    // console.log(counter)
                }
                
            })
            .catch(error => {
                console.log(error.message)
            })
        },
    methods: {
        async Id_Sender(){
            await UpdateFieldsInADocument("Shubhash",this.id)
        }
    }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
body {
    margin: 0;
    background-color: #000;
}
h1 {
    font-family: Arial;
    color: red;
    text-align: center;
}
.wrapper {
    display: grid;
    grid-template-columns: repeat(5, 100%);
    overflow: hidden;
    scroll-behavior: smooth;
}
.wrapper section {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, auto);
    margin: 20px 0;
}
.wrapper section .item {
    padding: 0 2px;
    transition: 250ms all;
}
.wrapper section .item:hover {
    margin: 0 40px;
    transform: scale(1.2);
}
.wrapper section a {
    position: absolute;
    color: #fff;
    text-decoration: none;
    font-size: 6em;
    background: black;
    width: 80px;
    padding: 20px;
    text-align: center;
    z-index: 1;
}
.wrapper section a:nth-of-type(1) {
    top: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, black 100%);
}
.wrapper section a:nth-of-type(2) {
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, black 100%);
}
@media only screen and (max-width: 600px) {
    a.arrow__btn {
    display: none;
    }
}
</style>