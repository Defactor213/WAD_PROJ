<template>
    <div>
    <Head/>
        <br>
        <div class="container">
            <div class="row">
                <div class="col text-center">

                    <img :src="image_url">
                </div>
                <div class="col">
                    Status: {{ status }} <br><br>
                    Score: {{ score }}/10 <br><br>
                    Rating: {{ rating }} <br><br>
                    Genres: {{ genres }}
                </div>
                <div class="col">
                    <div class="row">
                        <p class="display-3">{{ title }}</p>
                    </div>
                    <div class="row">
                        <button class="btn btn-outline-primary my-3" @click="favSender(),change_heart()">Favourite</button>
                        <button class="btn btn-outline-danger" @click="wishlistSender(),change_bookmark()">Wishlist</button>
                    </div>
                        <div class="row">
                        {{ description }}
                    </div>
                    </div>
                    </div>
                </div>
            </div>
</template>

<script>
import Head from '../components/head.vue';
import axios from "axios";
import {updateWishlist, updateFavs} from "../../firebase"
//import {getAuth} from 'firebase/auth'
export default {
    name:"anime_showcase",
    components: {
        Head
	},
    props:['id'],
    data() {
        return {
            API_URL: `https://api.jikan.moe/v4/anime/`,
            mal_id: "",
            image_url: "",
            title: "",
            description: "",
            status: "",
            score: "",
            popularity_rank: "",
            rating: "",
            genres: "",
            heart_source: "../assets/heart.png"
        }
    },
    created:
        function() {
            let temp_id = this.id
            this.mal_id = temp_id.toString()
            let api_endpoint = this.API_URL + this.mal_id
            axios.get(api_endpoint)
            .then(response => {
                console.log(response.data)
                this.image_url = response.data.image_url
                this.title = response.data.title
                this.description = response.data.synopsis
                this.status = response.data.status
                this.score = response.data.score
                this.popularity_rank = response.data.rank
                this.rating = response.data.rating
                let dict_genres = response.data.genres
                let list_genres = []
                for ( let genre of dict_genres ) {
                    list_genres.push( genre.name )
                }
                this.genres = list_genres.toString()
            })
            .catch(error => {
                console.log(error.message)
            })
        },
    methods:{
        change_heart: function(){
            document.getElementById("heart").innerText ="♥" 
        },
        change_bookmark: function(){
            document.getElementById("bookmark").innerText ="🕮" 
        },
        async wishlistSender(){
            try {
            const user = localStorage.getItem('myPage.expectSignIn')
            await updateWishlist(user,this.mal_id,this.genres)
            }
            catch(e){
                alert(e)
            }
        },
        async favSender(){
            try {
            const user = localStorage.getItem('myPage.expectSignIn')
            await updateFavs(user,this.mal_id,this.genres)
            }
            catch(e){
                alert(e)
            }
        },
    },
}
</script>

<style>
</style>