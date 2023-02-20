<template>
    <div>
        <Head/>

        
        <!-- Entire row body-->
        <div class="container-fluid">
        <div class="row">

            <div id="friendpage1" class="vstack col-lg-3 col-md-3 col-sm-3" >
        
                <!-- Side Top Nav bar-->
                <!-- <div class="container my-4" style=" background-color: rgba(15, 1, 50, 0.4);">
                    <div class="jumbotron pt-2" >
                        <h3 > Hello weeb!</h3> 

                    </div>

                    <div>
                        <ul class="nav flex-column nav-pills nav-fill pb-3" id="myTab" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active" id="favourites-tab" data-toggle="tab" href="#favourites" role="tab" 
                            aria-controls="favourites" aria-selected="true">Favourites</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="watchlist-tab" data-toggle="tab" href="#watchlist" role="tab" 
                            aria-controls="watchlist" aria-selected="false">Wishlist</a>
                            </li>
                        </ul>
                    </div>
                </div> -->


    
                <!-- Friends bottom column-->
                <div class="container pt-3" style="background-color: rgba(0,0,0, 0.4);">
                    

                    <!-- <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Find a friend!" aria-label="Friend's username" aria-describedby="findFriend">
                        <button class="btn btn-light" type="button" id="findFriend">Search</button>
                    </div> -->

                    <h4>My friends and I !!!</h4>

    
                    <div v-for="(friend, index) of fav_wish_data"
                    :key=index 
                    class="container d-flex justify-content-center">
                        <div class="card p-1" >
                            <div class="d-flex align-items-center">
                                <div class="image p-2"> <img src="../assets/friend-icon.png" class="rounded" > </div>
                                <div class="ml-3 w-80">
                                    <h5 class="mb-0 mt-0" style="color: black;">{{friend.name}} </h5> 
                        
                                    
                                    <div class="button mt-2 d-flex flex-row align-items-center">
                                        <button class="btn btn-sm btn-outline-dark w-100" style="margin-right:5px" @click = "get_friend_data(friend.name), friend_favs()">Favourites</button> 
                                        <button class="btn btn-sm btn-outline-dark w-100" @click = "get_friend_data(friend.name), friend_wish()">Wishlist</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        



                    
                    
                </div>
            </div>

        
            <!-- Content Center -->
            <div class="col-lg-9 col-md-9 col-sm-9">
                <div class="container" style="background-color: rgba(0,0,0,0.4);">
                    <div class="tab-content pt-3">
                        <div class="tab-pane fade show active">
                            <div v-if="fav_list != 0">
                                <h2> Favourites</h2>
                                <p>
                                    List of favourite animes
                                </p>
                            </div>

                            <div v-if="wish_list != 0">
                                <h2> Wish List</h2>
                                <p>
                                    List of wanted animes
                                </p>
                            </div>

                        

                            <div v-if="fav_list != 0">
                                <div class="d-inline container-fluid" v-for="data in fav_list" :key="data.name_anime">
                                    <div class="card" style="display:inline-block; background-color:rgba(0,0,0,0.6);">
                                        <router-link :to="{name:'anime_showcase', params:{ id:data.mal_id}}">
                                            <img class="card-img-top" :src="data.image_url" alt="Card image cap">
                                        </router-link>
                                        <div class="card-body">
                                            <router-link :to="{name:'anime_showcase', params:{ id:data.mal_id}}">
                                                <h5 class="card-title">{{data.title}}</h5>
                                                <p class="card-text">{{data.synopsis}}</p>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="wish_list != 0">
                                <div class="d-inline container-fluid" v-for="data in wish_list" :key="data.name_anime">
                                    <div class="card" style="display:inline-block;background-color:rgba(0,0,0,0.6);">
                                        <router-link :to="{name:'anime_showcase', params:{ id:data.mal_id}}">
                                            <img class="card-img-top" :src="data.image_url" alt="Card image cap">
                                        </router-link>
                                        <div class="card-body">
                                            <router-link :to="{name:'anime_showcase', params:{ id:data.mal_id}}">
                                                <h5 class="card-title">{{data.title}}</h5>
                                                <p class="card-text">{{data.synopsis}}</p>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>

            
                        <!-- <div class="tab-pane fade" id="watchlist" role="tabpanel" aria-labelledby="watchlist-tab">
                            <h2> Watchlist </h2>
                            <p>
                                List of watchlist animes
            
                            </p>

                            <div v-if="wish_list != 0">
                                <div class="row" v-for="data in wish_list" :key="data.name_anime">
                                    <div class="card" style="width: 18rem;">
                                        <img class="card-img-top" :src="data.image_url" alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title">{{data.title}}</h5>
                                            <p class="card-text">{{data.synopsis}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
            
                        </div>
                    </div>
                </div>


            </div>

        </div>
        </div>

        <h1 style="margin-top: 10px;">    
        
        </h1>
        <!-- <button>{{user_friends}}</button>
        <h1>{{fav_wish_data}}</h1> -->

    </div>
</template>

<script>
import Head from '../components/head.vue';
import axios from "axios"
import {getFriends,get_favs_wishlist} from "../../firebase"
//import {getAuth} from "firebase/auth"
export default {
    name:"register",
    components:{
        Head
    },
    data(){
        return{
            user_email: "",
            user_friends: [localStorage.getItem('myPage.expectSignIn')], //contains names in the form of email address
            fav_wish_data: [],
            friend_fav: "",
            friend_wishlist: "",

            name:"user1",

            //euans
            fav_list: [],
            wish_list: [],
        }
    },
    // created:
    //     function() {
    //         let api = "https://api.jikan.moe/v4/search/anime?q="
    //         for ( anime in this.friend)
    //     },
    methods: {
        get_friend_data(name){
            this.fav_list = []
            this.wish_list = []
            for (let f of this.fav_wish_data){
                if (f.name == name){
                    this.friend_fav = f.favs
                    this.friend_wishlist = f.wishlist
                }
            }
        },
        friend_favs() {
            console.log("fuck ur mother")
            let api = `https://api.jikan.moe/v4/anime/`
            for ( let data of this.friend_fav ) {
                api = `https://api.jikan.moe/v4/anime/`
                let anime_id = data.name_anime.toString()
                // console.log(anime_id)
                api += anime_id
                // console.log(api)
                axios.get(api)
                .then(response => {
                    let fav_anime = response.data
                    console.log(fav_anime)
                    this.fav_list.push(fav_anime)
                })
                .catch(error => {
                    console.log(error.message)
                })

            }
            console.log(this.fav_list)
        },
        friend_wish() {
            let api = `https://api.jikan.moe/v4/anime/`
            for ( let data of this.friend_wishlist ) {
                api = `https://api.jikan.moe/v4/anime/`
                let anime_id = data.name_anime.toString()
                api += anime_id
                axios.get(api)
                .then(response => {
                    let wish_anime = response.data
                    this.wish_list.push(wish_anime)
                })
                .catch(error => {
                    console.log(error.message)
                })
            }
        }
    },
    beforeMount(){
            const user = localStorage.getItem('myPage.expectSignIn')
            getFriends(user).then((response =>{
                for ( let i of response){
                    this.user_friends.push(i)
                }
                this.user_friends = Object.values(this.user_friends)
                console.log(this.user_friends)
            }))
            .catch(e => {
                console.log("The mount message is" + e)
            })
            },
    watch: {
            user_friends : function(data){
                console.log("starting watch")
                let val = Object.values(data)
                if (val.length > 0){
                    for( let f of val){
                        console.log(f)
                        get_favs_wishlist(f).then(response =>{
                        this.fav_wish_data.push({
                            name: f.substring(0,f.indexOf('@')),
                            favs: response[0],
                            wishlist:response[1]
                        })
                        })
                        .catch(e => {
                            console.log(e)
                        })
                    }
                }
            }
    }
            
        }


</script>

<style>
#friendpage1 .card {
    width: 100%;
    max-width: 100%;
    
    border: none;
    border-radius: 10px;
    background-color:rgb(249, 234, 255);
}

#friendpage1 .card img{
    width: 100%;
    height: 60px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
    transition: 0.4s;
}

#friendpage1 .nav-pills > li > a.active {
  background-color: rgb(101, 31, 167) ;
  color: lavender ;
}
#friendpage1 .nav-pills > li > a:hover {
            
            color:white ;
        }

p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
                line-clamp: 5; 
        -webkit-box-orient: vertical;
    }

h5 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
                line-clamp: 1; 
        -webkit-box-orient: vertical;
    }

    .card {
        flex: 1 1 33%;
        width: 20%;
        max-width: 20%;
        padding: 0px 8px;
        margin-bottom: 16px;
        background: grey;
    }

    .card img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 16px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
            transition: 0.4s;
        }

    .card h3 {
            padding: 16px;
            color: #313131;
            transition: .4s;
        }

    .card:hover img {
        transform: scale(1.05);
    }

    .card:hover h3 {
        color: #24c444;
    }

    a{
        color:white;
        text-decoration: none;
    }
</style>